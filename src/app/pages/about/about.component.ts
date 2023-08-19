/**
 * Copyright 2023, Kevin Medzorian 
 * This file is part of KFOSS.
 * KFOSS is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or any later version.
 * KFOSS is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with KFOSS. If not, see <https://www.gnu.org/licenses/>.
 **/
import { Component } from '@angular/core';
import logo_index from 'src/assets/images/tech/index.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public logos = logo_index.icons;
}
