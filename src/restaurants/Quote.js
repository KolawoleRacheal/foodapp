
const Quote=({quotes,calfunc})=>{
    // calfunc(20)

    return(
       <div>
        <h1>Quotes</h1>
             <div>
                {
                    quotes.map((list,index)=>{
                        return(
                           <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td key={index}>{list.text}<span>{list.author}</span></td>
                                </tr>
                            </tbody> 
                           </table>   
                        
                        )
                    })
                }
            </div> 
            {/* <button className="btn btn-outline-dark" onClick={()=>{calfunc(40)}} >Click Me</button> */}
            <button className="btn btn-outline-dark" onClick={
                function(){
                    alert('You click me')
                }
            } >Click Me</button>

       </div>       
    );
}
export default Quote;
