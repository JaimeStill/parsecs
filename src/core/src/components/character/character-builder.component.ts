import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  BackgroundList,
  Character,
  CharacterConfig,
  CharacterDetail,
  CharacterGenerator,
  CharacterList,
  CharacterProfileConfig,
  CharacterSpecies,
  MotivationList
} from '../../game';

@Component({
  selector: 'character-builder',
  templateUrl: 'character-builder.component.html'
})
export class CharacterBuilder implements OnInit {
  ngOnInit() {}
}
