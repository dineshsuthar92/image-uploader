<?php
namespace App\Traits;


use Illuminate\Support\Facades\File;

trait ImageUpload
{
    /**
     * This function will receive a file object and path of directory inside public folder
     * Uploaded image will be given a random name just to prevent any conflict among other image
     * @param $file
     * @param $public_upload_path
     * @return string
     */
    public function UserImageUpload($file, $public_upload_path) // Taking input image as parameter
    {
        $image_name = $this->quickRandom(20);
        $ext = strtolower($file->getClientOriginalExtension()); // You can use also getClientOriginalName()
        $image_full_name = $image_name.'.'.$ext;
        $file->move($public_upload_path,$image_full_name);

        return $image_full_name; // Just return image name
    }

    public function deleteFile($file_name, $public_path)
    {
        $file_exist = File::exists($public_path.'/'.$file_name);

        if(false == $file_exist){
            return false;
        }

        File::delete($public_path.''.$file_name);

        return true;

    }

    /**
     * This function generates a random string of default 16 characters
     * @param int $length
     * @return bool|string
     */
    protected function quickRandom($length = 16)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }
}
