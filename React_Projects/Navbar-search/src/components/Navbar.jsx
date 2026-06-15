import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// In this project, Navigation, search ferature , data showm on Ui and colsole, form, input, serach based on data, all covered.

const Navbar = () => {


    // for search feature with input, not for navigation.
    let [search, setSearch] = useState('');
    // let [data, setData] = useState('');
     let [data, setData] = useState([]);

     //!Search based on data feature.
    //! search for dummy data (optional)
    let dataList= [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pineapple',
        'Grapes',
        'Strawberry'
    ]


    //! search feature and show data in console and store in other state variable to shown in UI.
    // for search feature with input, not for navigation.
    //this function is invoked after form submitting for managing the form.
    function handleChange(e){
        e.preventDefault();
        console.log(search); //display serach data on console.
        //! either below line we can comment it or leave it not effect.becoz at line 46 setData value getUpadted and clear the setSearch.
        // setData(search); //to show in UI, first we store data in data state variable.
        // setSearch('') //clear the box data


        //!some extra features (optional)
        //! search based on data.
        //make the feature , user can search data.
        let filterData = dataList.filter(el=>
        // el.toLowerCase().includes(search.toLowerCase())  // in this logic , if one starting char is matched then it give result, we dont want this.
        el.toLowerCase() === search.toLowerCase() // all characters must match completely
    );

        setData(filterData); //store search data in data state variable.
        setSearch('');
    }

    



  return (
    <>

        {/* navigation feature */}
        <nav>
            <div>
                <h1>MyApp</h1>
            </div>

            <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/about">About</Link></li>
                <li><Link  to="/services">Services</Link></li>
                <li><Link  to="/contact">Contact</Link></li>
            </ul>


            {/* search feature with input*/}
            {/* we can write form outside the nav, if we need separte inpur box. but here we create navbar includded with navigation and search feartures */}
            {/* <form  onSubmit={handleChange} >

                <input type="text" placeholder="Search"
                // value="hello" ,// it make the data is fixed input box as hello.
                //The input field will be prefilled with the text: Hello
                // The user can change it (unless it is readonly or disabled).

                value={search} // it makes sysnc the data with input to react. As we write in input box, data get in search varible with async.
                //either , we can handle the input value here or we can write the function.
            // It makes the input a controlled component.

            // The value of the input is controlled by React state.

            // This gives full control over form behavior (validation, reset, dynamic changes).

            
                //better to handle it here. dont write extra function outside.
                 onChange={(e)=>{setSearch(e.target.value)}}
                 //onChange={handleInput}
                />


                {/* How buuton works without onclick */}
                {/* How does it work:
                In HTML, when you have a <form> element and a <button type="submit">, clicking the button triggers the form’s onSubmit event by default.
                In your case, the form has: */}
                {/* <button type='submit'>Search</button>

            </form> */} 
        </nav>



            {/* search feature with input*/}
            {/* we can write form inside the nav tag, if we need  to create navbar includded   search feartures but here we create a separe input box with serach feature*/}
            <form  onSubmit={handleChange} >

                <input type="text" placeholder="Search"
                // value="hello" ,// it make the data is fixed input box as hello.
                //The input field will be prefilled with the text: Hello
                // The user can change it (unless it is readonly or disabled).

                value={search} // it makes sysnc the data with input to react. As we write in input box, data get in search varible with async.
                //either , we can handle the input value here or we can write the function.
            // It makes the input a controlled component.

            // The value of the input is controlled by React state.

            // This gives full control over form behavior (validation, reset, dynamic changes).

            
                //better to handle it here. dont write extra function outside.
                 onChange={(e)=>{setSearch(e.target.value)}}
                 //onChange={handleInput}
                />


                {/* How buuton works without onclick */}
                {/* How does it work:
                In HTML, when you have a <form> element and a <button type="submit">, clicking the button triggers the form’s onSubmit event by default.
                In your case, the form has: */}
                <button type='submit'>Search</button>
            </form>


        {/* display data on UI -> those data is show which is type by user in input box*/}
         {data && ( //dont write {}, alyway write ()
                <div> 
                 <h3>Result</h3>
                <p>{data}</p>
                </div> 
               
        )}


        {/* Show data based on filter search (optional)*/}
        { data.length>0 ?(
        
        data.map((item, index)=>(
            <p key={index}>{item}</p>
        ))

    ) : (
        <p>No result found</p>
    )
    
    }
     </>
  )
}

export default Navbar