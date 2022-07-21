<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\FormValidationRequest;
use App\Models\FormImage;
use App\Models\GeneralForm;
use App\Models\StatusCode;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;

class FormController extends Controller
{
    use ImageUpload;

    public function saveFormDetails(FormValidationRequest $request)
    {
        $new_form = new GeneralForm();

        $new_form->title = $request->title;
        $new_form->description = $request->description;

        $new_form->save();

        return response()->api(StatusCode::TRUE, 'Form details captured succssfully', [
            'form_id' => $new_form->id
        ]);
    }

    public function saveImages(Request $request)
    {
        $form_id = $request->form_id;

        $form = GeneralForm::find($form_id);

        if(false == $form){
            return response()->api(StatusCode::FALSE, 'Invalid form id', null);
        }

        $form_image = $this->UserImageUpload($request->file, 'form_images/');

        $new_form_image = new FormImage();

        $new_form_image->general_form_id = $form_id;
        $new_form_image->uploaded_image = $form_image;

        $new_form_image->save();

        return response()->api(StatusCode::TRUE, 'Image uploaded successfully', null);
    }

    public function viewFormDetails($form_id)
    {

        $form = GeneralForm::find($form_id);

        if(false == $form){
            return response()->api(StatusCode::FALSE, 'Invalid form id', null);
        }
    }
}
