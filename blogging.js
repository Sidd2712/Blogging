 let loadMoreBtn=document.querySelector('.down_button');
 let currentItem=3;
 loadMoreBtn.addEventListener('click',(e)=>{
     console.log('clicked');
     let boxes=[...document.querySelectorAll('.blog .blog_container .each_blog')];
     for(var i=currentItem; i<currentItem+3; i++){
         boxes[i].style.display='inline-block';
     }
     currentItem+=3;

     if(currentItem>=boxes.length){
         loadMoreBtn.style.display='none';
     }
 });


//  let loadMoreBtn2=document.querySelector('.down_button2');
//  let currentItem2=3;
//  loadMoreBtn2.addEventListener('click',(e)=>{
//     console.log('clicked');
//     let boxes2=[...document.querySelectorAll('.blog .blog_container .each_blog')];
//     for(var i=currentItem2; i<currentItem2+3; i++){
//         boxes2[i].style.display='inline-block';
//     }
//     currentItem2+=3;
//     if(currentItem2>=boxes2.length){
//         loadMoreBtn2.style.display='none';
//     }
// });