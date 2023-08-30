import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio et,
        perspiciatis repellendus reiciendis sint possimus ipsa aspernatur
        similique minus tenetur eligendi odio? Ut, ratione exercitationem?
        Architecto voluptate laudantium id aperiam! Doloremque voluptas ipsa eum
        quia illo molestiae, non enim libero veritatis reprehenderit! Facere
        doloribus sunt facilis aut consequatur illum minus rerum, adipisci
        tempore cumque, nobis maiores odio sapiente ipsam voluptates. Et labore
        molestias amet adipisci harum hic fugit neque veniam accusamus ea enim
        sequi sed, illum expedita culpa dolorum, quam iure officia. Non
        laudantium tenetur pariatur fugiat? Ex, facere tempora. Cupiditate
        mollitia voluptatem temporibus architecto laboriosam, distinctio
        repudiandae rerum voluptas? In architecto ducimus, quo ad ipsa esse
        facilis! Tempore facere excepturi quidem atque accusamus nemo beatae
        officia tenetur deleniti quasi? Autem asperiores tempora ducimus
        perferendis possimus cumque incidunt, ullam quia recusandae. Debitis,
        fugiat, tempora dolorem dolore possimus corporis est voluptatum
        aspernatur repudiandae inventore error impedit, quam ducimus id corrupti
        autem. Provident doloremque consequuntur porro, illum animi laborum
        error pariatur expedita amet harum ad, cumque saepe quas repellendus
        itaque soluta earum nulla tempore impedit ducimus possimus aut maxime.
        Saepe, unde accusamus! Impedit assumenda sequi quidem ratione
      </p>
      <Button onClick={() => navigate("/login")}>Logout</Button>
    </div>
  );
};

export default HomePage;
