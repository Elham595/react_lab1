import matchers from "@testing-library/jest-dom/matchers";

let ProductList=(props)=>{
    let list=props.data.map((item)=>{
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <img src={`images/${item.ProIMG}`} style={{width:200,height:100}}/>
            </tr>
            
        )
    });
    return(
     <table class="table" style={{margin:20}}>
         <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
         </thead>
         <tbody>
             {list}
         </tbody>
        
     </table>
    )
}
export default ProductList;