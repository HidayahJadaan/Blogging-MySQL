import React, { useEffect, useState } from "react";
import Edit from "../assets/img/edit.png";
import Delete from "../assets/img/delete.png";
import { Link } from "react-router-dom";
import Menu from '../components/Menu'

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="info">
            <span>Hidayah</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolar sit amet enim,dolar sit amet enim.</h1>
        <p>
          Vivamus id blandit ante. Vivamus tincidunt justo congue, egestas lorem
          vitae, vestibulum nibh. Suspendisse at hendrerit lectus. In hac
          habitasse platea dictumst. Nullam dictum, tellus eu luctus hendrerit,
          ipsum urna sollicitudin tellus, at laoreet sem arcu et libero. Nulla
          laoreet dignissim iaculis. Mauris varius risus elit, in aliquet turpis
          vehicula in. In rutrum diam a elit convallis, vel ultrices lectus
          pellentesque. Integer aliquam odio id ex finibus ultricies. Mauris
          finibus ex vel porttitor tempor. Duis gravida lorem nisl, at lobortis
          ante vestibulum in. Morbi in aliquet nulla. Sed ex dolor, sodales vel
          magna accumsan, cursus pulvinar eros. Pellentesque placerat leo
          posuere, finibus metus a, efficitur mi. Pellentesque a erat pretium,
          commodo nulla eu, ornare turpis. Aliquam eget ullamcorper ex, at
          vulputate odio. Phasellus consectetur pellentesque elit, vel laoreet
          tellus viverra sit amet. Morbi commodo ligula velit, ac vulputate dui
          consequat sed. Pellentesque nec augue non nisl dapibus fringilla id in
          augue. Donec ullamcorper massa sit amet finibus fringilla. Duis
          efficitur diam in egestas elementum. Curabitur nisl ante, consectetur
          eu molestie vitae, porttitor a augue. Sed tempor erat ipsum, id
          vestibulum metus consequat non. Fusce velit dui, fermentum at purus
          vitae, eleifend tincidunt massa. Cras auctor ligula at nulla bibendum,
          at efficitur ligula venenatis. Etiam auctor accumsan leo, eget aliquam
          eros suscipit sit amet. Quisque sem diam, porttitor sed turpis vel,
          aliquet congue nibh. Ut elit sapien, venenatis hendrerit turpis
          elementum, laoreet aliquam ex. Aliquam erat volutpat. Aliquam vel nisi
          quis erat fringilla tristique quis nec mauris. Duis vel diam ut quam
          commodo maximus nec ut orci. Mauris at imperdiet odio, eget volutpat
          leo. Aliquam suscipit ligula eu sem porta tincidunt. Pellentesque vel
          leo sed lectus lobortis auctor vestibulum id eros. Sed in ex
          hendrerit, suscipit erat sit amet, faucibus tortor. Morbi quis iaculis
          est, at finibus ante. Proin pellentesque finibus scelerisque. Mauris
          ut nisi at lacus tristique lobortis. Morbi nec sapien mi. Donec sed
          fermentum sapien. Praesent risus magna, lacinia quis neque non,
          tincidunt convallis tortor. Nunc nec aliquet augue. Sed posuere mauris
          nisl, eget rutrum sem ornare eget. Suspendisse sit amet metus vel ante
          interdum pulvinar molestie sit amet arcu. Fusce et odio tempus,
          egestas nibh sit amet, viverra est. Donec tempus facilisis sem porta
          elementum. In sit amet iaculis urna, at tincidunt nisl. Nam a
          convallis ipsum.
        </p>
      </div>


<Menu />

     
    </div>
  );
}
