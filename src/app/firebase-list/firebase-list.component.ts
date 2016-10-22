import {Component} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-firebase-list',
  templateUrl:'./firebase-list.component.html'
})
export class FirebaseListComponent {
  item: FirebaseObjectObservable<any>;

  image:string;

  storageRef:any;
  textboxInput:string;

  af: AngularFire;
  uploadedFile:any;

  savebuttonClicked() {
    console.log('save clicked! ' + this.textboxInput);

     this.af.database.object('/rooms/room2').update({"topic":this.textboxInput})



    // var fr = new FileReader();
    // if (FileReader && this.uploadedFile && this.uploadedFile.length) {
    //   fr.readAsArrayBuffer(this.uploadedFile[0]);
    //   fr.onload = function () {
    //     var imageData = fr.result;
    //
    //     const derpImgRef = this.storageRef.child('/room2/videos/' + 1 + '.mp4');
    //     derpImgRef.put(imageData).then(function (snapshot) {
    //       console.log('file has been uploaded!');
    //     });
    //   };
    // }


  }

  constructor(af: AngularFire) {

    this.af = af;
    this.storageRef = firebase.storage().ref();
    const faranImgRef =  this.storageRef.child('/videos/Snapchat-8007737197212799828.mp4');
    faranImgRef.getDownloadURL().then(url => this.image = url);


    this.item = af.database.object('/rooms/room2');
    this.item.subscribe(snapshot => {
      console.log(snapshot.topic)
    });

    console.log('the document: ' + document);


    // video.onended = function(e) {
    //   /*Do things here!*/
    // };
    //
    // function myHandler(e) {
    //   // What you want to do after the event
    //
    //   console.log('video ended!');
    // }


  }

  ngOnInit() {
    console.log('in the ngInit!');

    console.log('video player: ' + <any>document.getElementById("video-player"));

    var video : any= document.getElementsByTagName('video')[0];

    console.log('video?? ' + video);


    (<any>document.getElementById('video-player')).addEventListener('ended', function () {

      console.log('video ended yeah!');
      (<any>document.getElementById('video-player')).currentTime = 0;
      (<any>document.getElementById('video-player')).play();

    },false);

  }


    changeHandler () {

      var file = (<any>document.getElementById("upload")).files[0];
      console.log('changed! ' + file);

      if (file) {
        console.log('file is good!');

        this.uploadedFile = file;


        // another way
        var storageRef = firebase.storage().ref("folderName/file.jpg");
        // var fileUpload = document.getElementById("fileUpload");
        // fileUpload.on(‘change’, function(evt) {
          var uploadTask = storageRef.put(file);
        // });







      }
    }

  videoEnded () {
    console.log('video has ended');
    (<any>document.getElementById("upload")).currentTime = 0;
  }

  }

