import React, { useEffect, useState } from "react";
import 'styles/storage.css';

const Storage = () => {
  return (

    <div class="containerd">
    <div class="post">
        <div class="header_post">
            <img src="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            </div> 

        <div class="body_post">
            <div class="post_content">

                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                    dolorum ex exercitationem.</p>

                <div class="container_infos">
                    <div class="postedBy">
                        <span>author</span>
                        John Doe
                    </div>

                    <div class="container_tags">
                        <span>tags</span>
                        <div class="tags">
                            <ul>
                                <li>design</li>
                                <li>front end</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Storage;
