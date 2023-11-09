<div align="center"> 
    <h2 align="center"><a href="https://github.com/mrhrifat/dua-ruqyah">Dua Ruqyah</a></h2>
          An amazing web app for learn, study Dua from Hadith of Muhammad (SAW) & Quran. <br/>
        Dua by Categories, Sub Categories, Translation, References & many more features.
</div>

## Live

- NOT Possible now due to database hosting

## Features

- Responsive Layout
- Category
- Sub Category
- Dua
- Settings Section
- Dua Translation, Reference
- 100% Performance, 95% Accessibility, 95% Best Practives, 100% SEO

## Lighthouse Report

<div align='center'>
  <img src='https://github.com/mrhrifat/image-gallery/assets/45077312/9ddd911a-164d-48a9-a0f5-6c0608604131'/>
</div>

## Development & Testing

If you are exiting & see how it works in local development machine

- Clone repositories
- Install dependencies (Take a Cup of Coffee!)
- Now you can start the server (If Backend & Database Not Ready you can see only Header)
- Connect to Backend & Database (First Time Only)
  - Open **Studio 3T Linux**, **Compass** or any **MongoDB Client**
  - Connect to `127.0.0.1:27017`
  - Open Code on Editor & Go to
  - `app/api/category/route.ts` && `app/api/subCategory/route.ts` && `app/api/dua/route.ts`
  - Hide/Comment 1st **POST()** Method & make Visible/Comment Out 2nd **POST()** method below of it.
  - Download `category, subCategory, dua` DB or JSON File from `Provided URL`
  - Copy **Cateogry** && **Sub Category** && **Dua** Array of Object from JSON file
  - Paste on `await Category/SubCategory/Dua.insertMany()`
  - Open Postman/Insomnia
  - Write Route `http://localhost:3000/api/category` | `http://localhost:3000/api/subCategory` | `http://localhost:3000/api/dua`
  - Select POST Method & Press Send. you can see successful response on success
  - Reload Browser/Restart Server & Check Webpage http://localhost:3000
- Go to http://localhost:3000
- Enjoy!

```
git clone https://github.com/mrhrifat/dua-ruqyah.git
yarn install or yarn
yarn dev
http://localhost:3000
```
