# Penn Labs Frontend Challenge

<img src="images/home.png" title="Front Page">

### Features

1. **Explore courses**

   - If you view `src/components/Courses.js`, you'll see that it is rendering _some_ of the courses data from `src/data/courses.json`
   - What you need to do is design a more robust way to display this courses information. You should display all information contained in the JSON--though put some thought into how to go about doing this.
     - For example, you might only want to show the description once the user clicks on the course.

2. **Add courses to your cart**

   - A user should be able to add a subset of these courses to their cart.
     - The user should not be able to add more than 7 courses to their cart.
   - When a user adds a course, this addition should be reflected in:
     1. How that cart is rendered
     2. How that course is rendered
     - For example, there should not still be a button to add that course to the cart, and maybe the text should be grayed out.

3. **View cart and checkout**

   - The user should be able to click a button to view their cart.
     - If the cart has no items in it, tell the user that their cart is empty.
     - If the cart has courses it in, display the courses and relevant information about them.
   - When the user is satisfied with their course cart, they should be able to "checkout"
     - This will either take the user to a new page containing (or will display on the same page) a "receipt" containing the courses which they checked out with.

4. **Additional features**

   - Feel free to add other features as well! Here are some ideas:
     - Big bonus if you integrate other data (course times, when they're offered, etc.)
       - A great resource is the [Penn Labs API](https://github.com/pennlabs/labs-api-server)
         ```
         fetch(https://api.pennlabs.org/registrar/search?q=cis-110)
         ```
     - Add animations for adding and viewing courses and the cart
     - Let users rank courses in order of preference
     - Take advantage of a [linter](https://eslint.org)
     - Allow users to filter and sort courses by different metrics

