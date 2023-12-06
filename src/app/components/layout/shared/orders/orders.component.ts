import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { UpdatePopupComponent } from '../update-popup/update-popup.component';
import { DataService } from 'src/app/core/services/data/data.service';
import { TakeProduct } from 'src/app/core/interfaces';
import { interval, map, startWith } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  role: string = '';
  time = '0h 0m 0s';

  orderlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  pending: number = 0;
  ready: number = 0;
  delivered: number = 0;
  displayedColumns: string[] = ['id', 'user', 'total', 'time', 'status', 'action'];

  constructor (private data: DataService, private dialog: MatDialog){
    this.loadOrder();
    this.role = sessionStorage.getItem('role') || '';
  }

  loadOrder(){
    this.data.getAllOrders().subscribe(res => {
      this.orderlist = res;
      this.dataSource = new MatTableDataSource(this.orderlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.pending = this.orderlist.filter((item: {[key: string]: string | []}) => item['status'] === 'pending').length;
      this.ready = this.orderlist.filter((item: {[key: string]: string | []}) => item['status'] === 'ready').length;
      this.delivered = this.orderlist.filter((item: {[key: string]: string | []}) => item['status'] === 'delivered').length;
    });
  }

  updateOrder(code: any){
    const order = this.data.getOrderById(code).subscribe(res => {
      if(this.role === 'waiter'){
        console.log(res);
      }
      if(this.role === 'chef'){
        console.log(res);
      }  
    });
    // const popup = this.dialog.open(UpdatePopupComponent, {
    //   enterAnimationDuration: '1000ms',
    //   exitAnimationDuration: '500ms',
    //   width: '50%',
    //   data: {
    //     orderid: code
    //   }
    // });
    // popup.afterClosed().subscribe(res => {
    //   this.loadOrder();
    // });
    alert('Update Order');
  }

  deleteOrder(code: any){
    console.log(code);
  }

  getTotalOrder(products: TakeProduct[]): number{
    const initalValue = 0;
    const total = products.map( item => item.qty*item.product.price ).reduce((sum, item) => sum + item);
    return total;
  }

  getTimeElapsed(dataEntry: string) {
    const inputDate = new Date(dataEntry);

    // Crear un observable que emita un valor cada segundo
    const intervalo$ = interval(300000); // cada 5 minutos

    // Suscribirse al observable y actualizar el tiempo transcurrido
    intervalo$
      .pipe(
        startWith(0), // Emitir el primer valor inmediatamente
        map(() => this.calcularTiempoTranscurrido(inputDate))
      )
      .subscribe(tiempo => {
        console.log(tiempo);
        this.time = tiempo;
      });
    
  }

  calcularTiempoTranscurrido(inputDate: Date): string {
    const ahora = new Date();
    const tiempoTranscurrido = ahora.getTime() - inputDate.getTime();

    // Calcular horas, minutos, segundos y milisegundos
    const horas = Math.floor(tiempoTranscurrido / 3600000); // 1 hora = 3600000 milisegundos
    const minutos = Math.floor((tiempoTranscurrido % 3600000) / 60000); // 1 minuto = 60000 milisegundos
    const segundos = Math.floor((tiempoTranscurrido % 60000) / 1000); // 1 segundo = 1000 milisegundos

    return `${horas}h ${minutos}m ${segundos}s`;
  }
}

