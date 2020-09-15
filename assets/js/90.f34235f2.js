(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{280:function(e,t,a){"use strict";a.r(t);var i=a(6),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("PagesInCategory",{attrs:{category:"Destination Choice Models"}}),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("Both common experience in practice as well as academic research"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" have found that trip distribution models are the largest source of error in travel forecasting. Destination choice models have consistently demonstrated the ability to better reproduce observed travel patterns than gravity models, both through the incorporation of additional variables, as well as by reflecting more complex statistical assumptions, such as capturing spatial autocorrelation."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" Although gravity models remained the most common form of trip distribution model as recently as 2013, given these considerations, logit-based destination choice models have become an increasingly common replacement for gravity models to improve the accuracy of the trip distribution step. Destination choice models are potentially even more advantageous over gravity models for longer distance personal travel and multinucleated travel regions, and have therefore been widely incorporated in statewide travel models (e.g., Arizona, California, Idaho, "),a("a",{attrs:{href:"http://onlinepubs.trb.org/onlinepubs/conferences/2014/ITM/Presentations/Tuesday/ModelEstimation/vBernardin.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Iowa"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"Maryland_Statewide_Transportation_Model"}},[e._v("Maryland")]),e._v(", New Hampshire, Ohio, Oregon, Tennessee, Wisconsin, etc.). Large metropolitan area travel models have also been quick to adopt destination choice models, but there are also many examples of small and medium-sized metropolitan area models now using or developing destination choice models including South Bend, Evansville, and Columbus, Indiana; Ann Arbor, Michigan; Burlington, Vermont; Knoxville and "),a("a",{attrs:{href:"https://www.trbappcon.org/2017conf/PresentationDetails.aspx?abstractid=79",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chattanooga"),a("OutboundLink")],1),e._v(", Tennessee; Charlottesville, Virginia; Charleston, South Carolina; and Jacksonville, Florida.")]),e._v(" "),a("p",[a("img",{attrs:{src:"AbstractDestinationChoice.png",alt:"",title:"AbstractDestinationChoice.png"}})]),e._v(" "),a("p",[e._v("Destination choice models are a type of "),a("a",{attrs:{href:"Trip_distribution"}},[e._v("trip distribution")]),e._v(" or "),a("a",{attrs:{href:"Spatial_Interaction_Models"}},[e._v("spatial interaction model")]),e._v(" which are formulated as discrete "),a("a",{attrs:{href:"choice_models"}},[e._v("choice models")]),e._v(", typically logit models. They can be thought of as a generalization of the traditional and widely used gravity model. In practice, this flexible and extensible formulation allows destination choice models to provide a better behavioral basis for trip distribution than the traditional gravity models, by allowing for a wider range of explanatory variables. Although technically gravity models can be considered a subset or special case of destination choice models, the term “destination choice models” typically is used to identify models that incorporate additional variables beyond size/attractions, "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance/friction factors")]),e._v(" and constants or k-factors. (see, for example, "),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])]),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn8",id:"fnref8"}},[e._v("[8]")])]),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"advantages-and-limitations-of-destination-choice-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantages-and-limitations-of-destination-choice-models"}},[e._v("#")]),e._v(" Advantages and Limitations of Destination Choice Models")]),e._v(" "),a("p",[e._v("Although the gravity analogy may still be appropriate for trip distribution in mono-centric urban regions where accessibility to transit plays little to no role in choice of destination, this is no longer the case in many urban areas, where there may be more than one dominant attraction region, multiple and important suburban-to-suburban trip flows, and where there is interest in understanding the contribution of transit towards achieving more sustainable urban development patterns. The gravity model often times exhibits incorrect demand elasticities; in particular, the model may respond illogically to changes in levels of service where improved accessibility to a given destination may cause a disproportionate increase in total trips, and/or an increase in trips using the mode(s) whose accessibility did not change. Both of these results are undesirable and may lead to erroneous assessments of the impact of transit or highway improvements. Destination choice models can overcome these gravity model limitations. With appropriate specifications of utility, consistency between changes in levels of service and changes in demand can be assured when using well validated destination choice models. In addition, because the functional form of the destination choice utility is very flexible, accounting for singularities in the trip distribution pattern can be accomplished in intuitive ways. For example, to inform a gravity model of the presence of a natural barrier, such as a river, a K-factor is often used. With a destination choice model, a term can be added to the utility equation, statistically estimated from observed data, and interpreted in terms of equivalent minutes of travel time; a much more data-based and intuitive measure of the impact the river would have on a person's travel choice.")]),e._v(" "),a("p",[e._v("While a key advantage offered by destination choice models when compared to the more traditional gravity model is their ability to consider additional factors, at the same time it is also important to recognize destination choice models in practice today still struggle to explain the spatial distribution of personal travel. This is due in large measure to the the importance of unobserved attributes such as the price and quality of goods and services provided at destinations. In many cases, a destination choice model may be able to double the goodness-of-fit, or explain twice as much of the observed travel patterns than a gravity model, but in the end still explain less than half of the variation in the observed patterns.")]),e._v(" "),a("p",[e._v("Both the advantages and limitations of destination choice models can be understood in terms of the factors that affect travelers' destination choices based on those the models can incorporate or reflect and those they cannot. The table below describes some of these advantages and limitations.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Observed Variables")]),e._v(" "),a("th",[e._v("Gravity Models")]),e._v(" "),a("th",[e._v("Destination Choice Models")]),e._v(" "),a("th",[e._v("Not in Models")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Number of Households")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Number of employees by industry")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Travel Time and/or distance")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("River crossings, highway crossings & other known psychological barriers")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Where the traveler lives")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Traveler's income, etc.")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Proximity of similar, competing destinations")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Convenience of destinations to other attractive places")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Walkability, density, mix of uses at destinations")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Parking Prices and Availability (sometimes)")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Unobserved Variables")]),e._v(" "),a("td",[e._v("Gravity Models")]),e._v(" "),a("td",[e._v("Destination Choice Models")]),e._v(" "),a("td",[e._v("Not in Models")])]),e._v(" "),a("tr",[a("td",[e._v("Simple Random Variation")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Other Traveler Attitudes / Preferences (toward price and quality of goods/services, etc.)")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Spatial Autocorrelation / Unobserved homogeneity of destinations")]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Price of goods/services provided at the destination")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("Quality of goods / services provided at the destination")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("Occupation of workers in residences")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("Social relationships (friendships, familial relations)")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("History/habit (this used to be the best pizza place)")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])]),e._v(" "),a("tr",[a("td",[e._v("Aesthetics")]),e._v(" "),a("td"),e._v(" "),a("td"),e._v(" "),a("td",[e._v("X")])])])]),e._v(" "),a("h3",{attrs:{id:"destination-choice-models-in-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-models-in-practice"}},[e._v("#")]),e._v(" Destination Choice Models in Practice")]),e._v(" "),a("p",[e._v("Destination choice models can be used in aggregate trip-based models as an alternative to gravity models or other spatial interaction models. Destination choice models are standard and ubiquitous in tour-based and activity-based models.")]),e._v(" "),a("p",[e._v("As of 2005, 5% of MPOs were using destination choice models"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn9",id:"fnref9"}},[e._v("[9]")])]),e._v(", mostly for trip distribution in aggregate trip-based models. As of 2014, based on a survey by "),a("a",{attrs:{href:"https://www.fhwa.dot.gov/planning/tmip/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TMIP"),a("OutboundLink")],1),e._v(", 9% of MPOs & DOTs were using a tour-based or activity-based model and an additional 17% were in the process of developing them. Destination choice models are therefore likely currently in use in approximately 15% of travel models and likely to be used in roughly a third of models in the relatively near term future.")]),e._v(" "),a("p",[e._v("As noted above, destination choice models have been incorporated into the travel model framework in several states and regions (see "),a("a",{attrs:{href:"https://www.trbappcon.org/2017conf/PresentationDetails.aspx?abstractid=79",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chattanooga, Tennessee"),a("OutboundLink")],1),e._v(" for a regional example and "),a("a",{attrs:{href:"http://onlinepubs.trb.org/onlinepubs/conferences/2014/ITM/Presentations/Tuesday/ModelEstimation/vBernardin.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Iowa"),a("OutboundLink")],1),e._v(" for a statewide example.)")]),e._v(" "),a("p",[e._v("For tips on things to check when developing or using a Destination Choice Model, check out this "),a("a",{attrs:{href:"Choice_Model_Development_in_Practice"}},[e._v("page")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-theoretical-foundations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-theoretical-foundations"}},[e._v("#")]),e._v(" Destination Choice: Theoretical Foundations")]),e._v(" "),a("p",[e._v("Destination choice (and trip distribution) models can be derived from a variety of theoretical starting points, the most common of which are entropy maximization and random utility theory. Both approaches generate mathematically similar functional forms that can generally be classed as spatial interaction models. These "),a("a",{attrs:{href:"Destination_Choice_Theoretical_Foundations"}},[e._v("theoretical foundations")]),e._v(" define the basic assumptions of destination choice models, their functional forms and parameter estimation requirements.")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-mathematical-formulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-mathematical-formulation"}},[e._v("#")]),e._v(" Destination Choice: Mathematical Formulation")]),e._v(" "),a("p",[e._v("The most common "),a("a",{attrs:{href:"Destination_Choice_Mathematical_Formulation"}},[e._v("mathematical formulation")]),e._v(" of destination choice is the multinomial logit (MNL) model. Gravity models, which are commonly used in aggregate, trip-based models, can be shown to be a special case of a MNL destination choice model."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn10",id:"fnref10"}},[e._v("[10]")])]),e._v(" Another type of early trip distribution model is the intervening opportunities model,"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn11",id:"fnref11"}},[e._v("[11]")])]),e._v(" but this model has fallen into disuse in North America. On the other hand, "),a("a",{attrs:{href:"Data_Driven_Methods"}},[e._v("data-driven approaches")]),e._v(" are emerging, facilitated by the availability of passive origin-destination big data.")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-set-formation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-set-formation"}},[e._v("#")]),e._v(" Destination Choice Set Formation")]),e._v(" "),a("p",[a("a",{attrs:{href:"Destination_Choice_Set_Formation"}},[e._v("Choice set formation")]),e._v(" is a critical step in the specification, estimation, and application of all discrete choice models, including destination choice. As noted by Thill (1992), the misspecification of choice sets can have adverse effects on parameter estimates and resultant computations of predicted choice probabilities. The accurate definition of the destination choice set has been an issue of much interest to the profession and a variety of approaches have been developed and adopted in research and practice. The problem is of acute significance in the context of destination choice modeling because the number of elemental alternatives can be very large. With many travel demand model systems comprising thousands of zones, destination choice sets can prove to be extremely large. On the one hand, methodological and computational advances now allow the use of the universe of locations as the destination choice set. On the other hand, the use of universal set of destinations as the choice set may compromise the behavioral representativeness of destination choice models. The analyst needs to consider the pros and cons of alternative approaches carefully when defining destination choice sets.")]),e._v(" "),a("h2",{attrs:{id:"joint-conditional-destination-choices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joint-conditional-destination-choices"}},[e._v("#")]),e._v(" Joint/Conditional Destination Choices")]),e._v(" "),a("p",[e._v("In traditional four-step travel models, all destination choices are assumed to be independent. This is reflected in the fact that gravity or destination choice models in this context are run in parallel and independently of each other. Both activity-based, hybrid, and advanced trip-based frameworks have developed different approaches to relaxing this assumption of independence. Each of these approaches is presented "),a("a",{attrs:{href:"Joint__Conditional_Destination_Choices"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"factors-affecting-destination-choice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factors-affecting-destination-choice"}},[e._v("#")]),e._v(" Factors Affecting Destination Choice")]),e._v(" "),a("p",[e._v("Typically, zone-based destination choice models will incorporate a utility function that includes two categories of explanatory factors: "),a("strong",[e._v("qualitative")]),e._v(" factors (how good are the choices in a given destination zone), and "),a("strong",[e._v("quantitative")]),e._v(" factors (how many individual choices are in a zone). The usage of qualitative explanatory factors is common in virtually all choice models. For destination choice models, these commonly include\n"),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Distance_/_Impedance_Terms"}},[e._v("impedance")]),e._v(",\n"),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Destination_Accessibilities"}},[e._v("accessibility")]),e._v(",\n"),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Psychological_Boundaries"}},[e._v("psychological boundaries")]),e._v(", and\n"),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Other_Destination_Qualities"}},[e._v("other destination qualities")]),e._v(",\nas well as\n"),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Traveler_Attributes"}},[e._v("traveler attributes")]),e._v(".\nThe "),a("em",[e._v("quantitative")]),e._v(" factors, typically labeled as "),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice#Size_Terms_/_Attractions"}},[e._v("size terms or attractions")]),e._v(', are an unusual feature of destination choice models, which arise because the "alternatives" represented in the model, often '),a("a",{attrs:{href:"Traffic_Analysis_Zone"}},[e._v("TAZs")]),e._v(", are not actually the choices, but they represent a pool of choices. The actual choice is instead one particular activity point (job, store, theatre seat, etc.) within the zone. Due to this distinction, factors that represent the quantity (instead of quality) of choices in a zone need to be treated differently in the mathematical formulation, as documented "),a("a",{attrs:{href:"Choice_Models_with_Aggregate_Choices"}},[e._v("here")]),e._v(". A more extensive description of the various factors in destination choice models is found "),a("a",{attrs:{href:"Factors_Affecting_Destination_Choice"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-data-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-data-sources"}},[e._v("#")]),e._v(" Destination Choice: Data Sources")]),e._v(" "),a("p",[e._v("The flexibility of destination choice models comes at a cost. While it is possible to represent the selection of trip destinations more rigorously, destination choice models tend to require more "),a("a",{attrs:{href:"Destination_Choice_Data_Sources"}},[e._v("data")]),e._v(" and data with higher fidelity than traditional [. There are two types of data that are relevant for destination choice models. Observed choice data describe origin-destination flows that have been observed in a survey, by counting or by passive data collection. Explanatory data, on the other hand, refer to input data that describe either destinations or characteristics of the decision maker who chooses the destination. Further discussion on data sources is available "),a("a",{attrs:{href:"Destination_Choice_Data_Sources"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-parameter-estimation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-parameter-estimation"}},[e._v("#")]),e._v(" Destination Choice: Parameter Estimation")]),e._v(" "),a("p",[e._v("Once observed choices and explanatory variables from data are related by formulating a utility function, the challenge becomes estimating the parameters that quantify these relationships or how explanatory variables contribute to destination choice probabilities. Rather than a one time effort, this is commonly an iterative process in which alternative specifications of the utility function are tested. The parameter estimation process is based in statistical / econometric theory and generally relies on maximum likelihood estimation (MLE) techniques. Specialized software or custom programming is generally required. Algorithmic approaches to MLE for destination choice models generally fall into two general families: gradient-based and metaheuristics. For more information see "),a("a",{attrs:{href:"Destination_Choice_Parameter_Estimation"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-calibration-and-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-calibration-and-validation"}},[e._v("#")]),e._v(" Destination Choice: Calibration and Validation")]),e._v(" "),a("p",[e._v("In practice, destination choice models can rarely be applied for forecasting exactly as they are estimated. Calibration adjustments are commonly required for several reasons. Sometimes application of the model to application data sets produce results that differ in some important ways from the results when the model is applied to the estimation data sets. In some cases such differences can be caused or exacerbated by inconsistencies between the model estimation and application (such as different sources for explanatory variables like income or travel time or the omission of constraints in estimation). Careful and thoughtful adjustments in keeping with good professional judgment can be required in order ensure the applied model demonstrates both reasonable ability to replicate observed travel patterns (from both estimation data and in some cases, other independent data sources for validation) and reasonable response properties or elasticities to key variables. A variety of measures can be used to evaluate the validity of destination choice models. Comparisons to trip length frequency distributions remain the most common approaches although it has been demonstrated that models can easily be over-calibrated to reproduce trip length frequency distributions at the expense of their ability to accurately reproduce actual spatial interaction patterns."),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn12",id:"fnref12"}},[e._v("[12]")])]),e._v(" Various strategies can be and are commonly employed such as adjustments to distance or "),a("a",{attrs:{href:"Impedance"}},[e._v("impedance parameters")]),e._v(", the assertion of size or mode choice logsum parameters, and the use of constants. For more information on calibration and validation see "),a("a",{attrs:{href:"Destination_Choice_Calibration_and_Validation"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"destination-choice-implementation-and-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destination-choice-implementation-and-application"}},[e._v("#")]),e._v(" Destination Choice: Implementation and Application")]),e._v(" "),a("p",[e._v("Destination choice models can be implemented in various ways in different travel modeling frameworks. They can be applied disaggregately in activity-based models using Monte Carlo simulation or aggregately in trip-based models using matrices. In both of these contexts, there are important issues related to how destination choice models are integrated with the larger model system. Key issues include how various destination choices are related to each other, how choices of destination and mode are related to each other, and how the larger model system acheives an equilibrium between travel demand and supply, commonly through iterative feedback loops. For more in-depth discussion, click "),a("a",{attrs:{href:"Destination_Choice_Implementation_and_Application"}},[e._v("here")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Content_Charrette_Destination_Choice_Models"}},[e._v("Content Charrette: Destination Choice Models")])])]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("Zhao, Y. and K. Kockelman (2002) 'The Propagation of Uncertainty through Travel Demand Models', "),a("em",[e._v("Annals of Regional Science")]),e._v(" 36 (1), pp.145-163 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[a("p",[e._v("Bernardin, V. L., F. Koppelman, and D. Boyce. Enhanced Destination Choice Models Incorporating Agglomeration Related to Trip Chaining While Controlling for Spatial Competition. In Transportation Research Record: Journal of the Transportation Research Board of the National Academies, Washington, D.C., 2009, pp. 143-151. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[a("p",[e._v("Bernardin, V. L., F. Koppelman, and D. Boyce. Enhanced Destination Choice Models Incorporating Agglomeration Related to Trip Chaining While Controlling for Spatial Competition. In Transportation Research Record: Journal of the Transportation Research Board of the National Academies, Washington, D.C., 2009, pp. 143-151. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[a("p",[e._v("Chow, L.-F.,, F. Zhao, M.-T. Li, and S.-C. Li. Development and Evaluation of Aggregate Destination Choice Models for Trip Distribution in Florida. In Transportation Research Record: Journal of the Transportation Research Board of the National Academies, Washington, D.C., 2005, pp. 18-27 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[a("p",[e._v("Jonnalagadda, N., J. Freedman, W. A. Davidson, and J. D. Hunt. Development of Microsimulation Activity-Based Model for San Francisco: Destination and Mode Choice Models. In Transportation Research Record: Journal of the Transportation Research Board of the National Academies, Washington, D.C., 2001, pp. 25-35. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[a("p",[e._v("Bhat, C., A. Govindarajan, and V. Pulugata. Disaggregate Attraction-End Choice Modeling: Formulation and Empirical Analysis. In Transportation Research Record: Journal of the Transportation Research Board of the National Academies, Washington, D.C., 1998, pp. 0-68 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[a("p",[e._v("Borgers, A., and H. Timmermans. Choice Model Specification, Substitution and Spatial Structure Effects: A Simulation Experiment. Regional Science and Urban Economics, Vol. 17, 1987, pp. 29-47 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[a("p",[e._v("Fotheringham, A. S. Some Theoretical Aspects of Destination Choice and Their Relevance to Production-Constrained Gravity Models. Environment and Planning, Vol. 15A, 1983, pp. 464-488 "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn9"}},[a("p",[a("a",{attrs:{href:"SR_288_Metropolitan_Travel_Forecasting_Current_Practice_and_Future_Direction"}},[e._v("SR 288-Metropolitan Travel Forecasting Current Practice and Future Direction")]),e._v(" "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref9"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn10"}},[a("p",[e._v("Daly, A. Estimating Choice Models Containing Attraction Variables. Transportation Research B, Vol. 16B, No. 1, 1982, pp. 5–15. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref10"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn11"}},[a("p",[e._v("Stouffer, S. Intervening Opportunities: A Theory Relating Mobility and Distance. American Sociological Review, Vol. 5, 1940, pp. 845–867. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref11"}},[e._v("↩︎")])])]),e._v(" "),a("li",{staticClass:"footnote-item",attrs:{id:"fn12"}},[a("p",[e._v('Ye, X., W. Cheng and X. Jia (2012) "Synthetic Environment to Evaluate Alternative Trip Distribution Models." Transportation Research Record: Journal of the Transportation Research Board, No. 2302: p. 111-120. '),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref12"}},[e._v("↩︎")])])])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);