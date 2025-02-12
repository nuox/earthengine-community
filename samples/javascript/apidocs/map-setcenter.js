/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__map_setcenter]
// Set the position and optional zoom level of the map. Arguments must be
// unnamed, in order: longitude (x), latitude (y), zoom level. Latitude must be
// within [-85, 85].
Map.setCenter(-123.6, 47.7, 9);
// [END earthengine__apidocs__map_setcenter]
