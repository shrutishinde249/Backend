import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FieldSettingsModel,ToolbarSettingsModel} from "@syncfusion/ej2-dropdowns";

@Component({
  selector: 'app-drag-drop-comp',
  templateUrl: './drag-drop-comp.component.html',
  styleUrls: ['./drag-drop-comp.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DragDropCompComponent{

  @ViewChild("listbox1", { static: false }) public listObj1:any;
  @ViewChild("listbox2", { static: false }) public listObj2:any;
  public dataA: { [key: string]: Object }[] = [
    { Name: "InlandMarine", Code: "In" },
    { Name: "Casualty", Code: "Ca" },
    { Name: "Other", Code: "Ot" },
    { Name: "Package", Code: "Pac" },
    { Name: "Executive Risk", Code: "Exe" },
    { Name: "Aviation", Code: "Avi" },
    { Name: "Surety", Code: "Sur" },
    { Name: "Marine", Code: "Mar" },
    { Name: "Enviornmental", Code: "Env" }
  ];
  public dataB: { [key: string]: Object }[] = [];
  
  public fields: FieldSettingsModel = { text: "Name" };
  public toolbarSettings: ToolbarSettingsModel = {
    items: [
      "moveTo",
      "moveFrom",
      "moveAllTo",
      "moveAllFrom"
    ]
  };
  click() {
    var data = this.listObj2.getDataList();
 
  this.dataB.push(data);
  delete this.dataA[data];
  console.log(this.dataA);
  console.log(this.dataB);
  }
  actionBegin(args: any) {
    console.log(args);
  }
  actionComplete(args: any) {
    console.log(args);
  }
  
}
