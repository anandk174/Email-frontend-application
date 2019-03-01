import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule
    ]
})

export class MaterialModule {}