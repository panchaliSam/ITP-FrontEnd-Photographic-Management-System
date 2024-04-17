import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1Image from '../images/homePage/card1.jpg';
import Card2Image from '../images/homePage/card2.jpg';
import Card3Image from '../images/homePage/card3.jpg';
import Card4Image from '../images/homePage/card4.jpg';
import Card5Image from '../images/homePage/card5.jpg';

function BasicExample() {
  const cardStyle = { width: '18rem', marginRight: '20px' }; // Adjust margin-right as needed

  return (
    <div className="d-flex"> 
      <div style={cardStyle}>
        <Card>
          <Card.Img variant="top" src={Card1Image} />
          <Card.Body>
            <Card.Title>Graduation</Card.Title>
            <Card.Text>
                Capture the proud moments of academic achievement with our Graduation category.
                From cap and gown portraits to candid shots with friends and family, preserve 
                the memories of this significant milestone in life.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card>
          <Card.Img variant="top" src={Card2Image} />
          <Card.Body>
            <Card.Title>Couples</Card.Title>
            <Card.Text>
                Celebrate love and companionship with our Couples category.
                Whether it's engagement sessions, anniversary portraits, or simply moments
                of togetherness, our system helps you cherish the special bond between two people.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card>
          <Card.Img variant="top" src={Card3Image} />
          <Card.Body>
            <Card.Title>New Born</Card.Title>
            <Card.Text>
                Welcome the newest member of the family with our New Born category.
                Document those precious early days of life with adorable baby portraits,
                tender family moments, and heartwarming memories to cherish for a lifetime.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card>
          <Card.Img variant="top" src={Card4Image} />
          <Card.Body>
            <Card.Title>Wedding</Card.Title>
            <Card.Text>
                Make your wedding memories last forever with our Wedding category.
                From engagement parties to the big day itself, our system helps you
                capture every magical moment,ensuring your special
                day is preserved in all its beauty
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div style={cardStyle}>
        <Card>
          <Card.Img variant="top" src={Card5Image} />
          <Card.Body>
            <Card.Title>Events</Card.Title>
            <Card.Text>
                Document all your special events with our Events category.
                Whether it's a birthday bash,
                our system helps you organize and share photos from every occasion, making
                it easy to relive the excitement again and again
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
