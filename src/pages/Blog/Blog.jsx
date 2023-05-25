import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-8 bg-slate-200 rounded-lg'>

            <h1 class="mt-2 p-2 text-2xl font-bold"> 1.Tell us the differences between uncontrolled and controlled components?</h1>
            <p class="ms-4 p-6 text-lg"><span class="font-bold ">Answer:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>

            {/* <!-- Question - 2     --> */}
            <h1 class="mt-2 p-2 text-2xl font-bold"> 2.How to validate React props using PropTypes?</h1>
            <p class="ms-4 p-6 text-lg"><span class="font-bold">Answer:</span>Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props.
                <br /> App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>

            {/* <!-- Question - 3     --> */}
            <h1 class="mt-2 p-2 text-2xl font-bold"> 3.Tell us the difference between nodejs and express js?</h1>
            <p class="ms-4 p-6 text-lg"><span class="font-bold">Answer:</span> Express is built on top of Node, so yes Express adds more features. Node is just a Javascript environment with libraries to make it easy to write software, where Express extends Node specifically to make webservers easy to write.  <br />Express/Connect adds the concept of middleware, a simplified way of managing different routes, automated integration with several templating engines and a bunch more.</p>

            {/* <!-- Question - 4     --> */}
            <h1 class="mt-2 p-2 text-2xl font-bold"> 4.What is a custom hook, and why will you create a custom hook?</h1>
            <p class="ms-4 p-6 text-lg"><span class="font-bold">Answer:</span> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. If that function calls other hooks, like useEffect, useState, or maybe another custom hook, then your function is itself a hook, and, by convention, should be given a name that starts with “use” to make it clear that it is a hook.</p>
        </div>
    );
};

export default Blog;