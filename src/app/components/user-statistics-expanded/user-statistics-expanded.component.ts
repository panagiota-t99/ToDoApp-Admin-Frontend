import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ChartType, ChartOptions, ChartDataSets, ChartConfiguration} from 'chart.js';
import {Label} from 'ng2-charts';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-statistics-expanded',
  templateUrl: './user-statistics-expanded.component.html',
  styleUrls: ['./user-statistics-expanded.component.scss']
})
export class UserStatisticsExpandedComponent implements OnInit {
  private userid:any;
  public listname:any;
  public username:any;

  public barChartOptions = {
    responsive: true,
    scales : { yAxes: [{ ticks: {beginAtZero: true} }]},
    plugins: {
      legend: false
    },
  };
  public barChartLabels: Label[] = [];
  public barChartData:  ChartDataSets[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public chartColors: any[] = [
    {
      backgroundColor: localStorage.getItem("currentColor")
    }];

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem("currentUser");
    this.username= localStorage.getItem("currentUsername");
    this.listname = localStorage.getItem("currentList");
    this.getItemStats();
  }

  async getItemStats() {
    const items = await this.userService.getItems(this.userid,this.listname);
    var counts = [];
    if (items.length) {
      // @ts-ignore
      document.getElementById("barChart").style.display = "block";
      for (let item of items) {
        this.barChartLabels.push(item.name);
        counts.push(item.count);
      }
      this.barChartData = [{data: counts}];
      console.log(items);
    }
    else
    {
      alert("No items in the list!");
      await this.router.navigate(['admin/home/user/stats']);
    }

  }

}
