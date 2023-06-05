<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listings = Listing::paginate(16);

        return response()->json($listings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    try {
        // Validate the request data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'cover_image' => 'required|string',
            'location' => 'required|string',
            'features' => 'nullable|array',
        ]);

        // Create the listing
        $listing = Listing::create($validatedData);

        return response()->json([
            'message' => 'Listing created successfully.',
            'listing' => $listing,
        ], 201);
        } catch (Exception $e) {
        return response()->json([
            'message' => 'Failed to create the listing.',
            'error' => $e->getMessage(),
        ], 500);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $listing = Listing::find($id);
        return response()->json($listing);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            // Validate the request data
            $validatedData = $request->validate([
                'user_id' =>'required|exists:users,id',
                'title' =>'required|string',
                'description' =>'required|string',
                'price' =>'required|numeric',
                'cover_image' =>'required|string',
                'location' =>'required|string',
                'features' => 'nullable|array',
            ]); 
            
            // Update the listing
            $listing = Listing::find($id);
            $listing->update($validatedData);
            
            return response()->json([
               'message' => 'Listing updated successfully.',
                'listing' => $listing,
            ], 200);
            
        } catch (Exception $e) {
            return response()->json([
               'message' => 'Failed to update the listing.',
                'error' => $e->getMessage(),
            ], 500);
    
        
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $listing = Listing::find($id);
    
        if (!$listing) {
            return response()->json([
                'message' => 'Listing not found.'
            ], 404);
        }
    
        $listing->delete();
    
        return response()->json([
            'message' => 'Listing deleted successfully.'
        ], 201);
    }
}
