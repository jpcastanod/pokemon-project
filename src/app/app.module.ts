import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Http
import { HttpClientModule } from '@angular/common/http';
//Routes
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ComparationPokemonDetailsComponent } from './comparation-pokemon-details/comparation-pokemon-details.component';

//NgRx
import { StoreModule } from '@ngrx/store';
import { PokedexReducer } from './store/reducers/pokedex.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//Modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Pipes
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
import { MultipleBarChartComponent } from './multiple-bar-chart/multiple-bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    NavbarComponent,
    PokemonDetailComponent,
    BarChartComponent,
    ComparationPokemonDetailsComponent,
    FilterPipe,
    MultipleBarChartComponent

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,

    StoreModule.forRoot({
      pokedex: PokedexReducer

    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailComponent]
})
export class AppModule { }
