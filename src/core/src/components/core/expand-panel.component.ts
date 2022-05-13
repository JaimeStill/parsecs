import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'expand-panel',
  templateUrl: 'expand-panel.component.html'
})
export class ExpandPanelComponent {
  @Input() label: string = 'Title';
  @Input() cardStyle: string = 'background-default';
  @Input() collapsedIcon: string = 'keyboard_arrow_right';
  @Input() expandedIcon: string = 'keyboard_arrow_down';

  @Input() show = false;
  @Output() expand = new EventEmitter();

  icon = () => this.show
    ? this.expandedIcon
    : this.collapsedIcon;

  toggle = () => {
    this.show = !this.show;

    if (this.show)
      this.expand.emit();
  }
}
