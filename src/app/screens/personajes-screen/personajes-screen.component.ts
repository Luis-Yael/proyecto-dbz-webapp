import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personaje, PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes-screen',
  templateUrl: './personajes-screen.component.html',
  styleUrls: ['./personajes-screen.component.scss']
})
export class PersonajesScreenComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('ordenAnchor', { static: true }) ordenAnchor!: ElementRef<HTMLElement>;

  /** Ancho en px que usará el panel del mat-select */
  panelWidth: string = '260px'; // valor inicial de cortesía

  // ========================Variables ========================
  // Carga
  public isLoading: boolean = true;

  // Datos base (todos) y rebanada paginada
  public personajes: Personaje[] = [];
  public personajesPagina: Personaje[] = [];

  // Paginación
  public paginaActual: number = 0;   // índice 0-based
  public tamPagina: number = 12;     // items por página
  public totalFiltrados: number = 0; // total después de ordenar/filtrar (aquí no filtramos, sólo orden)

  // Ordenamiento (coincide con el <select> del HTML)
  public ordenActual: 'nombre_asc' | 'nombre_desc' | 'ki_asc' | 'ki_desc' = 'nombre_asc';

  // Descripciones expandidas por id (para “mostrar más…”)
  public descripcionesExpandidas: Record<number, boolean> = {};

  // Subscripciones
  private subDatos?: Subscription;

  constructor(
    private readonly personajesService: PersonajesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }



}
