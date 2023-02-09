function ButtonsPlates ({filterPlate}){
    return (
    <div className="container">
            <button onClick={()=>filterPlate("shrimp")}><img className='logo' src='https://assets.bonappetit.com/photos/610c5f4e53498539aff611e2/1:1/w_1124,h_1124,c_limit/0921-Pantry-Seared%20Shrimp%20With%20Kare-Kare%20Butter.jpg' alt='shrimp'/>
      <p className="dish">Srimp</p></button>
            <button onClick={()=>filterPlate("fish")}><img className='logo' src='https://poshjournal.com/wp-content/uploads/2021/01/air-fryer-tilapia-2-500x500.jpg' alt='fich'/>
      <p className="dish">Fish</p></button>
            <button onClick={()=>filterPlate("chicken")}><img className='logo' src='https://i.pinimg.com/originals/08/1f/06/081f06aa1e3b1595e4e6c4d16de14f7a.png' alt='cicken'/>
      <p className="dish">Chicken</p></button>
            <button onClick={()=>filterPlate("salmon")}><img className='logo' src='https://avatars.mds.yandex.net/i?id=d04370b942b3f74f6365099dac4c442a_l-5221283-images-thumbs&n=13' alt='salmon'/>
      <p className="dish">Salmon</p></button>
            <button onClick={()=>filterPlate("potato")}><img className='logo' src='https://sun9-47.userapi.com/iha5iHNaByXi_T2BMbIpGuiS-DWf7jvahB_ccQ/hfYLtRfK4Rg.jpg' alt='potato'/>
      <p className="dish">Potato</p></button>
            <button onClick={()=>filterPlate("vegetables")}><img className='logo' src='https://www.healthygffamily.com/wp-content/uploads/2017/03/IMG_9818-720x720.jpg' alt='vegetables'/>
      <p className="dish">Vegetables</p></button>
            <button onClick={()=>filterPlate("soup")}><img className='logo' src='https://i.pinimg.com/originals/b5/3c/cc/b53ccc620329e5a639fc8e47fd39224e.jpg' alt='soup'/>
      <p className="dish">Soup</p></button>
            <button onClick={()=>filterPlate("pasta")}><img className='logo' src='https://cdn.bellinigroup.ru/upload/201711/5a1e846d7f866_1080x1080_fit.png' alt='pasta'/>
      <p className="dish">Pasta</p></button>
            <button onClick={()=>filterPlate("dessert")}><img className='logo' src='https://mykaleidoscope.ru/uploads/posts/2021-09/1632403697_12-mykaleidoscope-ru-p-tort-assorti-krasivo-foto-22.jpg' alt='dessert'/>
      <p className="dish">Dessert</p></button> 
        </div>
    )
}
export default ButtonsPlates;