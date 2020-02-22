import { ui } from './ui'
import { http } from './http'

const titleInput = document.querySelector('#title').value;
const bodyInput = document.querySelector('#body').value;
const idInput = document.querySelector('#id').value;
//event listener
document.addEventListener('DOMContentLoaded',getPosts)

//get posts

function getPosts(){
  http.get('http://localhost:3000/posts').then(data =>{
    ui.showPosts(data)
    ui.showAlert('post is getted','alert alert-success')
  }).catch(err =>console.log(err))
}