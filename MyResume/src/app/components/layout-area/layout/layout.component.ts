import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { DetailsComponent } from "../details/details.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, HeaderComponent, DetailsComponent, SkillsComponent]
})
export class LayoutComponent {

}
