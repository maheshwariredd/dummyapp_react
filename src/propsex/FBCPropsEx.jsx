import React from 'react'

const FBCPropsEx = (a) => {
    console.log(a);
    if(a.isMarried==true){
  return (
    <div>
        <h1>{a.username}is a married persion</h1>
        {
            a.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
    </div>
  )

}else{
    return <h1>un married persion</h1>
}
}

export default FBCPropsEx