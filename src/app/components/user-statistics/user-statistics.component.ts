import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ChartType, ChartOptions} from 'chart.js';
import {SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {Router} from "@angular/router";



@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss']
})
export class UserStatisticsComponent implements OnInit {

  private userid: any;

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [{
    backgroundColor: ["#0099ff", "#cc0099", "#ff0000", "#ff9900", "#009933"],
  }];


  constructor(private router: Router, private userService: UserService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getListStats();
  }

  ngOnInit(): void {
  }

  async getListStats() {
    this.userid = localStorage.getItem("currentUser");
    const lists = await this.userService.getLists(this.userid);

    if (lists.length) {
      for (let list of lists) {
        this.pieChartLabels.push(list.name);
        this.pieChartData.push(list.count);
      }
    } else{
      alert("No lists found!");
      await this.router.navigate(['admin/home']);}
  }

  async chartClicked(e: any) {
    localStorage.setItem("currentList", e.active[0]._model.label);
    localStorage.setItem("currentColor", e.active[0].$previousStyle.backgroundColor);
    await this.router.navigate(['admin/home/user/stats/expanded']);
  }
}
