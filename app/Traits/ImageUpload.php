<?php
namespace App\Traits;


trait ImageUpload
{
    public function UserImageUpload($file, $public_upload_path) // Taking input image as parameter
    {
        $image_name = $this->quickRandom(20);
        $ext = strtolower($file->getClientOriginalExtension()); // You can use also getClientOriginalName()
        $image_full_name = $image_name.'.'.$ext;
        $file->move($public_upload_path,$image_full_name);

        return $image_full_name; // Just return image name
    }

    protected function quickRandom($length = 16)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
    }
}
