import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mainpackages extends Component {
  render() {
    // Dummy data for packages (you can replace this with your actual data)
    const packages = [
      { id: 1, name: "Wedding", image: "https://img.freepik.com/free-photo/groom-bride-pink-dress-hold-each-other-with-love-standing-room_8353-7385.jpg?t=st=1714818401~exp=1714822001~hmac=39410fa4ad00af1095bf774c646b7b8895bcd22b1adb6f04f788420ba031d961&w=1380", link: "/weddingpackages" },
      { id: 2, name: "Party", image: "https://img.freepik.com/free-photo/nightlife-with-people-dancing-club_23-2149052691.jpg?t=st=1714818495~exp=1714822095~hmac=5fb295f28c8a5daf1b3f7e9a650806920b0ce3695871aaee02e6e250b166ab26&w=1380", link: "/partypackages" },
      { id: 3, name: "Graduation", image: "https://img.freepik.com/free-photo/three-graduate-friends-graduation-robes-looking-their-diploma-campus_496169-1352.jpg?t=st=1714818568~exp=1714822168~hmac=ca5da395d6dd6a4242d96bb0c7b1d8603f090ab33d15dd4f578e5114c859e6c0&w=1380", link: "/graduationpackages" },
      { id: 4, name: "Other", image: "https://img.freepik.com/free-photo/small-baby-pink-blanket_23-2147760133.jpg?t=st=1714819409~exp=1714823009~hmac=ff5f991ffa0271bb31e9f19e23d2f236555f0ec8a398efd1713c3dd4653b0526&w=1380", link: "/otherpackages" }
    ];

    return (
      <div>
        <div>Mainpackages</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {packages.map(pkg => (
            <div key={pkg.id} style={{ width: '23%', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
              <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: 'auto%', borderRadius: '10px 10px 0 0' }} />
              <div style={{ padding: '10px' }}>
                <h2>{pkg.name}</h2>
                <Link to={pkg.link}><button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View Packages</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
