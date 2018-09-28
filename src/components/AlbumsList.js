import * as React from 'react'

export default function AlbumsList(props) {
  return (
    <div>
        <ul>    
            {props.albums.map(album =>         
                <li key={album.id}> 
                    <h1>All Albums</h1>
                </li>
            )}          
            There are { props.albums.length } albums available.      
        </ul> 
    </div>);
            }

