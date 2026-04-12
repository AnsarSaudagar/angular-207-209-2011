import { Component } from '@angular/core';
import { Personal } from './personal/personal';
import { Contact } from './contact/contact';
import { Address } from './address/address';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
