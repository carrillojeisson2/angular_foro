import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TopicService } from '../../services/topic.service';
import { Topic } from '../../models/topic';
import { global } from '../../services/global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService, TopicService],
})
export class ProfileComponent implements OnInit {
  public user: User;
  public topic: Topic[];
  public url: string;
  public topics;
  public page_title: string;

  constructor(
    private _userService: UserService,
    private _topicService: TopicService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = 'el perfil';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      var userId = params['id'];

      this.getUser(userId);
      this.getTopics(userId);
    });
  }

  getUser(userId) {
    this._userService.getUser(userId).subscribe((response) => {
      if (response.user) {
        this.user = response.user;
      } else {
        // Redireccion
      }
    });
  }

  getTopics(userId) {
    this._topicService.getTopicByUser(userId).subscribe(
      (response) => {
        if (response.topics) {
          this.topics = response.topics;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
