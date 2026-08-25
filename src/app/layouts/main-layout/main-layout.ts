import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, Footer, Home],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
