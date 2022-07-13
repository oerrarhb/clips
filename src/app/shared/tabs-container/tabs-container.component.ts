import {
  Component,
  OnInit,
  QueryList,
  AfterContentInit,
  ContentChildren,
  OnDestroy,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent> = new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach((tabi) => (tabi.active = false));
    tab.active = true;
    return false;
  }

  ngOnDestroy(): void {
    this.tabs.forEach((tabi) => (tabi.active = false));
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }
}
