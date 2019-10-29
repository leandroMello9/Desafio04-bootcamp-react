import React,{Component} from 'react';
import Post from './Post'




class PostList extends Component {
  state={
    posts:[
      {
        id:1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkahh6NEQ5ZfHhhw4ELdRiP-8qyCfnbCX2Ohs0BKPnzG7NjPth"
        },
        date:"04 jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [{
          id:1,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4g"
          },
          content: "Aqui na rocketseat só trabalhamos com cobol."
        }
      ]


      },
      {
        id:2,
        author: {
          name: "Leandro Melo",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkxnoDNCTF-6hsaAeNB0HqcHTJjVwRCf6EQR48k2hF-cMSdd2j",
        },
        date:"04 jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [{
          id:1,
          author: {
            name: "Diego Fernandes",
            avatar: "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
          },
          content: "Não estamos contratando ainda."
        }
      ]

      }
    ]
  }
  componentDidMount() {
    
    
  }
  
  render(){
    const {posts} = this.state;
    return(
      <div className="postlist">

        {this.state.posts.map(post => 
      
        <Post 
        key={post.id} {...post}/>
        )}
        
        
         
      </div>
      
    )
  }
}
export default PostList;