(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{302:function(e,t,a){"use strict";a.r(t);var o=a(6),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("The Georgia Statewide Model is a state-of-practice transportation model. Like many contemporary statewide models it covers the entire country, with con-siderable network and zonal detail within Georgia, reduced detail in the five adjacent states, and substantially reduced detail beyond them. It includes both person and freight flow models that estimate demand separately, but use a combined traffic assignment procedure to estimate traffic volumes and travel times.")]),e._v(" "),a("p",[e._v("The Georgia Statewide Model follows the "),a("a",{attrs:{href:"Trip_based_models"}},[e._v("four-step")]),e._v(" sequential travel forecasting process widely used in the practice of urban and statewide modeling. This model does not distinguish time-of-day periods but assigns daily volumes. A high-level description of the Georgia Statewide Model can be found on this website"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"person-travel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#person-travel"}},[e._v("#")]),e._v(" Person Travel")]),e._v(" "),a("p",[e._v("Like most statewide models, the level of zonal and network detail is coarser than in urban models. A total of 2,242 traffic analysis zones (TAZs) cover the continental U.S., 1,715 of which are within the 159 counties in Georgia. Travel demand within Georgia is modeled both for persons and freight travel demand. The person travel model was estimated and calibrated using data from the 2008 Georgia add-on to the National Household "),a("a",{attrs:{href:"Travel_surveys"}},[e._v("Travel Survey")]),e._v(" (NHTS). A distinction is made between short and long-distance travel markets. The former are defined as trips less than 75 minutes in duration. Four trip purposes were defined for each travel market:")]),e._v(" "),a("ul",[a("li",[e._v("Home-based work (HBW)")]),e._v(" "),a("li",[e._v("Home-based other (HBO)")]),e._v(" "),a("li",[e._v("Non-home-based (NHB)")]),e._v(" "),a("li",[e._v("Commercial")])]),e._v(" "),a("p",[e._v('Cross-classification models were developed to estimate daily trip productions as a function of household size and auto availability. Households are stratified by urban versus rural location (a zonal attribute), as well as low versus "non-low" income. An allocation process is used to assign total households in each zone to these strata. The graphic below shows a flowchart of the Georgia person travel demand model.')]),e._v(" "),a("p",[a("img",{attrs:{src:"GdotPersonTravelModel.gif",alt:"",title:"fig:GdotPersonTravelModel.gif"}}),a("br"),e._v(" "),a("em",[e._v("Flowchart of the Person Travel Model Source: Atkins (2011: 30)"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])])])]),e._v(" "),a("p",[e._v("Trip productions are calculated by multiplying the number of households by the average number of observed trips (from the NHTS) for each strata. Linear regression models of trip attractions have been defined separately for each trip purpose, each using a different combination of employment, population, and number of households in each zone as independent variables. The parameters were iteratively adjusted during calibration, as data on trip attraction relationships are not available from the NHTS. The total attractions are scaled to equal total productions for each trip purpose. The trip rates are further adjusted based on an accessibility measure that captures the differences in trip-making between urban and rural residents. This is a novel approach not typically found in statewide models.")]),e._v(" "),a("p",[e._v("Trip distribution is used to predict the likely destinations of the generated trips. A gravity model was developed for the internal trip purposes. The "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance")]),e._v(" function includes estimates of intrazonal and interzonal travel time, as well as terminal times based upon employment density in the origin and destination TAZs. The distribution models were calibrated to replicate the NHTS average trip lengths and shape of the trip length frequency distributions. The models appear to replicate the NHTS well for short-distance trips. However, the small number of observations for long-distances trips in the NHTS precludes a confident appraisal of how well that travel market is represented within the model.")]),e._v(" "),a("p",[e._v("An intercity mode choice model allocates the total travel to competing modes. The data in the NHTS is not adequate for model estimation, so a model structure and parameters were adopted from an earlier version of the California high-speed rail (HSR) model (Cambridge Systematics, 2006"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v("). The constants in the model were calibrated to reproduce observed Georgia mode shares summarized from FAA air traveler and Amtrak passenger counts and long-distance auto trips from the 1995 American Traveler Survey (ATS). A set of distance filters from airports and Amtrak stations is also used to restrict access to those modes from travelers with trip ends far from them. The resulting model is used for trips with at least one end within Georgia. Fixed mode shares are used for all other long-distance trips (i.e., those passing through Georgia).")]),e._v(" "),a("h2",{attrs:{id:"freight-travel-demand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freight-travel-demand"}},[e._v("#")]),e._v(" Freight Travel Demand")]),e._v(" "),a("p",[e._v("The demand for freight travel is estimated using the same steps as for person travel. The model was estimated using the Global Insight Transearch database. Transearch is a proprietary national estimate of commodity flows based upon a combination of public and private sources. These data are available at the county level across the country. The data used for model estimation were aggregated into 56 districts of one or more counties and the 16 commodities most dominant in the state. A step-wise linear regression was used to correlate employment with annual tonnage produced (productions) and consumed (attractions). These models were estimated at three levels of geography:")]),e._v(" "),a("ul",[a("li",[e._v("Short-range (within Georgia)")]),e._v(" "),a("li",[e._v("Medium-range (between Georgia and adjacent states)")]),e._v(" "),a("li",[e._v("Long-range (between Georgia and non-adjacent states)")])]),e._v(" "),a("p",[e._v("Special generators for two counties (Chatham and Fulton) were added to capture the dynamics associated with large distribution centers in each county and the ocean port in Chatham County. A gravity model is used for trip distribution. As in the person trip distribution model, an exponential function using distance was used to calculate impedance for each combination of commodity and level of geography. Medium and long-distance trips were further differentiated by direction of flow (i.e., internal-external versus external-internal). The average distances from the model match the Transearch data.")]),e._v(" "),a("p",[e._v("An incremental logit model was developed for the freight mode choice component, again based upon the Transearch data. The existing mode shares are used as the basis, with changes triggered by changes in travel cost by mode. The mode shares for air and waterborne commodity flows are assumed to be invariant over time, such that the model is in essence a truck-rail diversion model. The choice tree is shown in the flowchart below.")]),e._v(" "),a("p",[a("img",{attrs:{src:"GdotFreightModel.png",alt:"",title:"GdotFreightModel.png"}})]),e._v(" "),a("p",[a("em",[e._v("Nesting of the Georgia statewide freight mode choice model")])]),e._v(" "),a("p",[e._v("The upper-level rail nest is further divided into carload and intermodal movements. Prior to assignment, the commodity flows (in annual tons) are converted into truckload equivalents using data from the 2002 Vehicle Inventory and Use Survey (VIUS). Conversion factors by commodity and distance range were used for this purpose.")]),e._v(" "),a("h2",{attrs:{id:"assignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assignment"}},[e._v("#")]),e._v(" Assignment")]),e._v(" "),a("p",[e._v("The daily travel demand of both the person and freight components are combined and assigned to the network of the statewide model. A multi-class static user equilibrium assignment model is used for this purpose. Generalized cost as a function of link travel times and vehicle operating costs expressed in equivalent minutes is used for calculating link impedances. Estimates of peak period travel times are used when assigning short-distance flows. Off-peak travel times were used for medium and long-distance flows. A feedback loop from the assignment to trip distribution is used in the model to cycle through the process until the interzonal travel times become stable. During the intermediate cycles, a simplified person mode choice model is used to achieve fast computer run times. The model is rerun with the full mode choice model after convergence is obtained in the feedback loop.")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("hr"),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("GDOT Statewide Travel Demand Model, http://www.dot.ga.gov/IS#tab-3 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("Atkins (fomerly PBS&J) (2011), “Development of Statewide Model Report”, Atlanta: Georgia Department of Transportation. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Cambridge Systematics, Inc. (2006) “Bay Area/California High-Speed Rail Ridership and Revenue Forecasting Study: Interregional Model System Development.” (Available online at "),a("a",{attrs:{href:"http://www.hsr.ca.gov",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.hsr.ca.gov"),a("OutboundLink")],1),e._v(") "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);