import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animeList:any = [
    {
      name: "Black Clover",
      description: "Black Clover is a Japanese manga series written and illustrated by Yūki Tabata. The story follows Asta, a young boy born without any magic power. This is unknown to the world he lives in because seemingly everyone has some sort of magic power.",
      imageName: "black-clover-saint-stage-new-power-level-divine-spoilers-1271505.webp",
    },
    {
      name: "Bleach",
      description: "Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.",
      imageName: "Bleach-10-Transformations-of-Ichigo.webp",
    },
    {
      name: "That Time I Got Reincarnated as a Slime",
      description: "\"Rimuru\" Tempest is the new name of a slime in a fantasy world taken by a former 37-year-old human Satoru Mikami after he is killed by a passing robber. Broken free from ordinary, stale past life, his fresh adventure in a fantasy world as a slime monster with unique abilities begins. (Source: MAL News)",
      imageName: "37995822_494562387659669_5111793603806494720_n.jpg"
    }
  ]
}
