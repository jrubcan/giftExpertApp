

async function getGrif(category) {
     const url = `https://api.giphy.com/v1/gifs/search?api_key=oJC5WheCaic3nf0olX7ZsO9ImOsaSLgE&q=${encodeURI(category)}&limit=10`;
     const resp = await fetch(url);
     const {data} = await resp.json();

     const gif = data.map((img)=>{
        return{
            id: img.id,
            title: img.title,
             url: img.images.downsized_medium.url
          }
        })
        //     //console.log(gif);
    return gif;
    
  }
  
    

// const getGrif = async (category)=>{
//     const url = `https://api.giphy.com/v1/gifs/search?api_key=oJC5WheCaic3nf0olX7ZsO9ImOsaSLgE&q=${encodeURI(category)}&limit=10`;
//     const resp = await fetch(url);
//     const {data} = await resp.json();
    

//     const gif = data.map((img)=>{
//         return{
//             id: img.id,
//             title: img.title,
//             url: img.images.downsized_medium.url
//         }
//     })
//     //console.log(gif);
//     return gif;
    
// }

export default getGrif;