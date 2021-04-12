const bucket=document.querySelectorAll('.bucket');
const cat=document.getElementById('cat');

buckets.forEach((bucket)=>addEventListener('dragover',allowDrop));
function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData('text',event.target.id);
}
function drop(event){
    event.preventDefault();
    const imageID=event.dataTransfer.getData
}