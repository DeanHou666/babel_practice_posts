import { ui } from './ui'
import { http } from './http'

//event listener
document.addEventListener('DOMContentLoaded',getPosts)
document.querySelector('.post-submit').addEventListener('click',submitPost)
document.querySelector('#posts').addEventListener('click',editPost);
document.querySelector('.card-form').addEventListener('click',cancelEdit)
document.querySelector('#posts').addEventListener('click',deletePost)
//get posts

function getPosts(){
  http.get('http://localhost:3000/posts').then(data =>{
    ui.showPosts(data)
  }).catch(err =>console.log(err))
}

function submitPost(){
  const title = document.querySelector('#title').value
  const body = document.querySelector('#body').value
  const id = document.querySelector('#id').value
  if( title === '' || body === ''){
    ui.showAlert('check input','alert alert-danger')
  }else{
    const data={
      title,
      body
    }
    if(id === ''){
      http.post(`http://localhost:3000/posts/${id}`,data)
      getPosts()
      ui.showAlert('a  new post is added ','alert alert-success')
      ui.clearFields()
    }else{
      http.put(`http://localhost:3000/posts/${id}`,data)
      getPosts()
      ui.showAlert('post has been updated ','alert alert-warning')
      ui.changeState('anthing')
    }
  
  }

}

function editPost(e){
  if(e.target.parentElement.classList.contains('edit')){
    const body = e.target.parentElement.previousElementSibling.textContent
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const id = e.target.parentElement.dataset.id;
    const data ={
      title,
      body,
      id
    }
    ui.fillForm(data)
  }
}

function cancelEdit(e){
  if(e.target.classList.contains('post-cancel')){
    e.target.remove()
    ui.changeState('post')
  }
}

// function deletePost(e){
//   e.preventDefault()
//   if(e.target.parentElement.classList.contains('delete')){
//     if(confirm('sure to delete')){
//       const id = e.target.parentElement.dataset.id
//       http.delete(`http://localhost:3000/posts/${id}`).then(() =>{
//         getPosts()
//         ui.showAlert('post removed','alert alert-success')
       
//       }).catch(err =>console.log(err))
//     }
//   }
// }
function deletePost(e){
  e.preventDefault();
  if(e.target.parentElement.classList.contains('delete')){
    const id = e.target.parentElement.dataset.id;
    if(confirm('sure to delete')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data =>{
        ui.showAlert('post removed','alert alert-success')
        getPosts();
      })
      .catch(err => console.log(err))
    }
  }

}