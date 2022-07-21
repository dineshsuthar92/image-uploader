# Image Uploader Demo
Demo Project

1. Clone the repo
2. Run `composer install`
3. copy `.env.example` to `.env`
4. Create mysql database as mentioned in `.env` (modify as per your requirement) in phpmyadmin
5. Run `npm install` to install packages mentioned in `package.json`.
6. Run `npm run dev` to compile vue files.
5. Run `php artisan serve`

## Urls/Routes

1. Home page: `http://127.0.0.1:8000/`: 
Contains form to capture title, description and images (You can upload multiple images too)

2. Form details page: `http://127.0.0.1:8000/list-form-details` :
This page will list the titles, description with a link to view images under that form.

3. Image Details page: `http://127.0.0.1:8000/list-form-details/images/<FORM_ID>` :
This page will list the images uploaded under particular <FORM_ID>
