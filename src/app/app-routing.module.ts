import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { FoodContributionComponent } from './components/food-contribution/food-contribution.component';
import { ForexInvestmentComponent } from './components/forex-investment/forex-investment.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SavingsAndLoansComponent } from './components/savings-and-loans/savings-and-loans.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'about', component: AboutComponent},
  {path:'faq', component: FaqComponent},
  {path:'contact-us', component: ContactComponent},
  {path:'products/forex-investment', component: ForexInvestmentComponent},
  {path:'products/food-contribution', component: FoodContributionComponent},
  {path:'products/savings-and-loans', component: SavingsAndLoansComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
