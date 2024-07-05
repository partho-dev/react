## Few important information 
1. Start a new project in React.
    - npm install these packages - `react-router-dom react-hot-toast react-icons`
    - tailwind related packages - Update the config files

2. Ctr+Space = To get the suggestion for Tailwind CSS

3. To have glass effect on website using tailwind CSS, we can generate that from this website - https://tailwindcss-glassmorphism.vercel.app/


4. For having readymade style component for tailwind, we can use  flowbite - for table we can see this https://flowbite.com/docs/components/tables/

5. If there are some items with both `short` and `long descriptions`, but, we want to keep the UI as consistant and maintain description of one line.

- Description : {description ? description : “No Description provided”} — This will show inconsistant lines
- To maintain a consistant of 100 words per description, we can use `slice(0, 100)`
- Desscription : {description ? description.slice(0, 100): “No Description Provided”} —> This will ensure to maintain a consistancy on UI

6. To copy something on clipboard, we can use default windows property called - `navigator`
    - First create a button - `Copy Btn`
    - enable click handler on the button - `onClick(()=> handleClick(items_copy)  )`
    - create the click function on component 
        ```
         const handleClick = async (items_copy) =>{       
            await navigator.clipboard.writeText(items_copy)       
            toast.success(“Copied  ”)        }
         ```


