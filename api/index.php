<?php
require_once 'vendor/autoload.php';
require_once 'Metodos_Uteis.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

date_default_timezone_set('America/Araguaina');
setlocale(LC_ALL, 'pt_BR.utf-8');

$app = new Silex\Application();
$app->register(new JDesrosiers\Silex\Provider\CorsServiceProvider(), array(
    "cors.allowOrigin" => "*",
    "cors.allowMethods" => "GET, HEAD, OPTIONS, POST, PUT, DELETE"
));

$app->after($app["cors"]);
$app['debug'] = true;

$app->post('/api/v1/conjunto/add', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        $vars->ConjuntoA[] = $vars->Elemento;

        $response = [
            'Error' => '',
            'Retorno' => $vars->ConjuntoA
        ];
    } catch (PDOException $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/remover', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        $key = array_search($vars->Elemento, $vars->ConjuntoA);
        unset($vars->ConjuntoA[$key]);

        $response = [
            'Error' => '',
            'Retorno' => $vars->ConjuntoA
        ];
    } catch (PDOException $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/pertinencia', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        $result = in_array($vars->Elemento, $vars->ConjuntoA);

        $response = [
            'Error' => '',
            'Retorno' => $result
        ];
    } catch (PDOException $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/continencia', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar a continência');

        $temp = false;
        if (count($vars->ConjuntoA) <= count($vars->ConjuntoB)) {
            foreach ($vars->ConjuntoA as $elemento) {
                $temp = false;
                foreach ($vars->ConjuntoB as $el) {
                    if ($el == $elemento)
                        $temp = true;
                }

                if (!$temp)
                    break;
            }
        }

        $response = [
            'Error' => '',
            'Retorno' => $temp
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/uniao', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar a união');

        $new_array = array();
        foreach ($vars->ConjuntoA as $elemento)
            $new_array[] = $elemento;

        foreach ($vars->ConjuntoB as $elemento) {
            $temp = false;
            foreach ($vars->ConjuntoA as $el)
                if ($el == $elemento)
                    $temp = true;
            if (!$temp)
                $new_array[] = $elemento;
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/disjuncao', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar a disjunção');

        $new_array = array();
        foreach ($vars->ConjuntoA as $elemento)
            $new_array[] = $elemento;

        foreach ($vars->ConjuntoB as $elemento) {
            $new_array[] = $elemento;
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/diferenca', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar a diferença');

        $new_array = array();
        foreach ($vars->ConjuntoA as $elemento) {
            $temp = false;
            foreach ($vars->ConjuntoB as $el) {
                if ($el == $elemento)
                    $temp = true;
            }

            if (!$temp)
                $new_array[] = $elemento;
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/complemento', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoU))
            throw new Exception('É necessário dois conjuntos para aplicar o complemento');

        $new_array = array_diff($vars->ConjuntoU, $vars->ConjuntoA);

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/partes', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA))
            throw new Exception('É necessário um conjunto para gerar o conjunto das partes');

        $new_array = array(array());
        for ($i = 1; $i <= count($vars->ConjuntoA); $i++) {
            foreach (new Combinacoes($vars->ConjuntoA, $i) as $combinacao) {
                $new_array[] = $combinacao;
            }
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/produtocartesiano', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar produto cartesiano entre eles');

        $new_array = array();
        foreach ($vars->ConjuntoA as $elemento) {
            foreach ($vars->ConjuntoB as $el)
                $new_array[] = '(' . $elemento . ',' . $el . ')';
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->post('/api/v1/conjunto/uniaodisjunta', function (Request $request) use ($app) {
    $vars = json_decode($request->getContent());
    try {
        if (!is_array($vars->ConjuntoA) || !is_array($vars->ConjuntoB))
            throw new Exception('É necessário dois conjuntos para aplicar a união disjunta');

        $new_array = array();
        foreach ($vars->ConjuntoA as $elemento) {
            $new_array[] = '(' . $elemento . ',' . $vars->NomeConjuntoA . ')';
        }

        foreach ($vars->ConjuntoB as $elemento) {
            $new_array[] = '(' . $elemento . ',' . $vars->NomeConjuntoB . ')';
        }

        $response = [
            'Error' => '',
            'Retorno' => $new_array
        ];
    } catch (Exception $e) {
        $response = [
            'Error' => $e->getMessage(),
            'Retorno' => ''
        ];
    }

    return $app->json($response, (empty($response['Error']) == true ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST));
});

$app->run();
