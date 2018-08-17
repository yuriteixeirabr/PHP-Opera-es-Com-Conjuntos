import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MAT_DATE_LOCALE, MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule, MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule, MatTableModule,
    MatToolbarModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {RouterOutletComponent} from "./router-outlet.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule,
        MatStepperModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatToolbarModule,
        MatBadgeModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatChipsModule,
        MatAutocompleteModule
    ],
    declarations: [
        RouterOutletComponent
    ],
    entryComponents: [],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule,
        RouterOutletComponent,
        MatStepperModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDialogModule,
        MatToolbarModule,
        MatBadgeModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatChipsModule,
        MatAutocompleteModule
    ]
})
export class SharedModule {
}