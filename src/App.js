import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Sidebar from 'react-sidebar';

import authors  from './data';

let auth = {
  authName: "J.K. Rowling",
  authBooks: "7 Books",
  authImg: "https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg",
};    


class App extends Component {
  render() {
    return (
      <div>
     <div id="root"></div>
  <div id="app" class="container-fluid">
    <div class="row">

{/* <div class="col-2">
<Sidebar>
<img src="theindex.svg" class="logo" />
          <section>
            <h4 class="menu-item active">
              <a href="#">AUTHORS</a>
            </h4>
          </section>
</Sidebar>
</div> */}

  <div class="col-2">
        <sidebar>
          <img src="theindex.svg" class="logo" />
          <section>
            <h4 class="menu-item active">
              <a href="#">AUTHORS</a>
            </h4>
          </section>
        </sidebar>
      </div>

   <div class="content col-10">
        <div class="authors">
          <h3>Authors</h3>
          <div class="row">

    <div class="col-4">
      <Card class="col-4">
        <CardImg top width="100%" src={auth.authImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{auth.authName}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{auth.authBooks}</CardText>
        </CardBody>
      </Card>
    </div>




    <div class="col-4">
      <Card>
        <CardImg top width="100%" src="https://typeset-beta.imgix.net/elite-daily/2016/03/06144207/elite-daily-George-RR-Martin.jpg?w=800&h=800&auto=format&q=70&fit=crop&crop=faces"alt="Card image cap" />
        <CardBody>
          <CardTitle>George R.R. Martin </CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>5 books</CardText>
        </CardBody>
      </Card>
    </div>

      <div class="col-4">
      <Card>
        <CardImg top width="100%" src="https://images.8tracks.com/cover/i/010/010/920/tolkeinbigger-2362.jpg?rect=166,0,500,500&q=98&fm=jpg&fit=max" alt="Card image cap" />
        <CardBody>
          <CardTitle>J.R.R Tolkein </CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>6 books</CardText>
        </CardBody>
      </Card>
    </div>

       <div class="col-4">
      <Card>
        <CardImg top width="100%" src="http://speakingtigerbooks.com/wp-content/uploads/2016/06/naguib-mahfouz-5.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Naguib Mahfouz</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>8 books</CardText>
        </CardBody>
      </Card>
    </div>

        <div class="col-4">
      <Card>
        <CardImg top width="100%" src="http://images.archant.co.uk/polopoly_fs/1.4811429.1481285995!/image/image.jpg_gen/derivatives/landscape_630/image.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Agatha Christie</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>30 books</CardText>
        </CardBody>
      </Card>
    </div>

       <div class="col-4">
      <Card>
        <CardImg top width="100%" src="https://pbs.twimg.com/profile_images/941508335966343169/xsxkTLe0.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jordan Peterson</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2 books</CardText>
        </CardBody>
      </Card>
    </div>

       <div class="col-4">
      <Card>
        <CardImg top width="100%" src="https://literature.britishcouncil.org/assets/Uploads/writers/_resampled/CroppedImage680680-Margaret-Atwood-c-Jean-Malek-web.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Margaret Atwood</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>5 books</CardText>
        </CardBody>
      </Card>
    </div>


          </div>
        </div>
      </div>
    </div>
  </div> 
      </div>
    );
  }
}

export default App;
