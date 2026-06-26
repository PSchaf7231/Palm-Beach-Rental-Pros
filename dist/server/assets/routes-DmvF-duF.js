import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Building2, Calendar, Clock, DollarSign, ExternalLink, Home, Key, Mail, MapPin, Phone, Search, Shield, Star, Users } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var communities = [
	{
		name: "Two City Plaza",
		type: "Luxury High Rise",
		url: "https://twocityplazapb.com"
	},
	{
		name: "Water Club",
		type: "Waterfront Condo",
		url: "https://waterclublivingpb.com"
	},
	{
		name: "Alton",
		type: "Gated Community",
		url: "https://altonpb.com"
	},
	{
		name: "Vista Blue",
		type: "Oceanfront Condo",
		url: "https://vistabluepb.com"
	},
	{
		name: "Seven Bridges",
		type: "Gated Community",
		url: "https://sevenbridgespb.com"
	},
	{
		name: "Boca Bridges",
		type: "Gated Community",
		url: "https://bocabridgespb.com"
	},
	{
		name: "The Bristol",
		type: "Luxury High-Rise",
		url: "https://thebristolpb.com"
	}
];
var AGENT_NAME = "Paul Schafranick";
var AGENT_PHONE_DISPLAY = "561-255-7285";
var AGENT_PHONE_TEL = "5612557285";
function Index() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		budget: "",
		moveIn: ""
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const handleFormSubmit = (e) => {
		e.preventDefault();
		setFormSubmitted(true);
		setTimeout(() => setFormSubmitted(false), 4e3);
		setFormData({
			name: "",
			phone: "",
			email: "",
			budget: "",
			moveIn: ""
		});
	};
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-background text-foreground font-body",
		children: /* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "w-full border-b border-gold/20 bg-navy/95 backdrop-blur-sm",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ jsxs("span", {
							className: "font-display text-lg sm:text-xl font-semibold tracking-wide",
							children: [
								"Palm Beach ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Rental"
								}),
								" Pros"
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-foreground/80 font-medium",
							children: AGENT_NAME
						}), /* @__PURE__ */ jsxs("a", {
							href: `tel:${AGENT_PHONE_TEL}`,
							className: "inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold transition-colors",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), AGENT_PHONE_DISPLAY]
						})]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative flex items-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')] bg-cover bg-center opacity-20" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "animate-fade-in-up",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-4",
										children: [/* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 text-gold" }), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-semibold text-gold uppercase tracking-wider",
											children: "Palm Beach County's Elite Rental Specialists"
										})]
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-4",
										children: [
											"Luxury Living",
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "text-gold",
												children: "Redefined"
											}),
											" in Palm Beach"
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base sm:text-lg text-foreground/70 max-w-lg mb-6 leading-relaxed",
										children: "Exclusive access to the finest waterfront estates, gated communities, and premier high-rise residences."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap gap-3",
										children: [/* @__PURE__ */ jsxs("a", {
											href: "#listings",
											className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25",
											children: [
												/* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }),
												"Browse Listings",
												/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
											]
										}), /* @__PURE__ */ jsxs("a", {
											href: `tel:${AGENT_PHONE_TEL}`,
											className: "inline-flex items-center gap-2 rounded-md border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10",
											children: [
												/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
												"Call ",
												AGENT_PHONE_DISPLAY
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 flex items-center gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex -space-x-2",
											children: [
												1,
												2,
												3,
												4
											].map((i) => /* @__PURE__ */ jsx("div", {
												className: "h-8 w-8 rounded-full border-2 border-navy bg-gradient-to-br from-gold/40 to-gold/10 flex items-center justify-center text-[10px] font-bold text-gold",
												children: String.fromCharCode(64 + i)
											}, i))
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-sm font-semibold text-foreground",
											children: "500+ Happy Clients"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs text-foreground/50",
											children: "Trusted across Palm Beach County"
										})] })]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "animate-fade-in-up",
								style: { animationDelay: "0.2s" },
								children: /* @__PURE__ */ jsxs("div", {
									className: "rounded-xl border border-gold/20 bg-card/80 backdrop-blur-sm p-5 sm:p-6 shadow-2xl shadow-black/30",
									children: [
										/* @__PURE__ */ jsxs("h2", {
											className: "font-display text-xl sm:text-2xl font-bold text-foreground mb-1",
											children: ["Find Your ", /* @__PURE__ */ jsx("span", {
												className: "text-gold",
												children: "Dream Home"
											})]
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-xs text-muted-foreground mb-4",
											children: [AGENT_NAME, " will curate listings just for you."]
										}),
										formSubmitted ? /* @__PURE__ */ jsxs("div", {
											className: "text-center py-6",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "mx-auto h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center mb-3",
													children: /* @__PURE__ */ jsx(Star, { className: "h-6 w-6 text-gold" })
												}),
												/* @__PURE__ */ jsx("h3", {
													className: "font-display text-lg font-bold text-foreground mb-1",
													children: "Request Received!"
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "text-xs text-muted-foreground",
													children: [AGENT_NAME, " will contact you within 24 hours."]
												})
											]
										}) : /* @__PURE__ */ jsxs("form", {
											onSubmit: handleFormSubmit,
											className: "space-y-3",
											children: [
												/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
													className: "block text-xs font-medium text-foreground/80 mb-1",
													children: "Full Name"
												}), /* @__PURE__ */ jsx("input", {
													type: "text",
													required: true,
													value: formData.name,
													onChange: (e) => setFormData({
														...formData,
														name: e.target.value
													}),
													className: "w-full rounded-md border border-gold/20 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors",
													placeholder: "John Smith"
												})] }),
												/* @__PURE__ */ jsxs("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
													children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
														className: "block text-xs font-medium text-foreground/80 mb-1",
														children: "Phone"
													}), /* @__PURE__ */ jsx("input", {
														type: "tel",
														required: true,
														value: formData.phone,
														onChange: (e) => setFormData({
															...formData,
															phone: e.target.value
														}),
														className: "w-full rounded-md border border-gold/20 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors",
														placeholder: "(561) 555-0123"
													})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
														className: "block text-xs font-medium text-foreground/80 mb-1",
														children: "Email"
													}), /* @__PURE__ */ jsx("input", {
														type: "email",
														required: true,
														value: formData.email,
														onChange: (e) => setFormData({
															...formData,
															email: e.target.value
														}),
														className: "w-full rounded-md border border-gold/20 bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors",
														placeholder: "john@example.com"
													})] })]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
													children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
														className: "block text-xs font-medium text-foreground/80 mb-1",
														children: "Monthly Budget"
													}), /* @__PURE__ */ jsxs("div", {
														className: "relative",
														children: [/* @__PURE__ */ jsx(DollarSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
															type: "text",
															required: true,
															value: formData.budget,
															onChange: (e) => setFormData({
																...formData,
																budget: e.target.value
															}),
															className: "w-full rounded-md border border-gold/20 bg-background/50 pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors",
															placeholder: "5,000+"
														})]
													})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
														className: "block text-xs font-medium text-foreground/80 mb-1",
														children: "Move-in Date"
													}), /* @__PURE__ */ jsxs("div", {
														className: "relative",
														children: [/* @__PURE__ */ jsx(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
															type: "date",
															required: true,
															value: formData.moveIn,
															onChange: (e) => setFormData({
																...formData,
																moveIn: e.target.value
															}),
															className: "w-full rounded-md border border-gold/20 bg-background/50 pl-8 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
														})]
													})] })]
												}),
												/* @__PURE__ */ jsxs("button", {
													type: "submit",
													className: "w-full rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 flex items-center justify-center gap-2",
													children: [/* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }), "Get Personalized Listings"]
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-[10px] text-center text-muted-foreground",
													children: "Your information is secure. We respect your privacy."
												})
											]
										})
									]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "listings",
				className: "py-8 sm:py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-6",
						children: [/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-2",
							children: ["Featured ", /* @__PURE__ */ jsx("span", {
								className: "text-gold",
								children: "Listings"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto",
							children: "Browse our curated selection of luxury rentals, updated in real-time."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "rounded-xl border border-gold/30 bg-card p-1 shadow-lg shadow-black/20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-lg border border-gold/20 bg-navy/50 min-h-[320px] flex items-center justify-center p-6",
							children: [/* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: "<!-- BOLDTRAIL FILTERED RENTAL IDX EMBED WIDGET GOES HERE - FILTER SET TO RESIDENTIAL RENTALS $2,500+ -->" } }), /* @__PURE__ */ jsxs("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ jsx(Search, { className: "h-10 w-10 text-gold/40 mx-auto mb-3" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-base font-display font-semibold text-foreground/60 mb-1",
										children: "IDX Widget Placeholder"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs text-muted-foreground max-w-md",
										children: "BoldTrail filtered rental IDX embed will render here. Filter preset: Residential Rentals $2,500+."
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "communities",
				className: "py-8 sm:py-10 bg-navy-light/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-6",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold text-gold uppercase tracking-widest mb-2 block",
								children: "Neighborhood Expertise"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-2",
								children: ["Communities We ", /* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Serve"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground max-w-xl mx-auto",
								children: "Deep local knowledge of Palm Beach County's most prestigious communities."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
						children: communities.map((community) => /* @__PURE__ */ jsxs("a", {
							href: community.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group relative rounded-lg border border-gold/15 bg-card p-4 transition-all duration-300 hover:border-gold/40 hover:bg-card/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/5",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start justify-between mb-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "h-8 w-8 rounded-md bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors",
										children: /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 text-gold" })
									}), /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5 text-gold/40 group-hover:text-gold transition-all" })]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-sm font-semibold text-foreground mb-0.5",
									children: community.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-muted-foreground uppercase tracking-wider mb-1",
									children: community.type
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] text-gold/70 font-medium truncate",
									children: community.url.replace("https://", "")
								})
							]
						}, community.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "about",
				className: "py-8 sm:py-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "max-w-3xl mx-auto text-center",
						children: /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("span", {
								className: "text-xs font-semibold text-gold uppercase tracking-widest mb-2 block",
								children: ["About ", AGENT_NAME]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-4",
								children: ["Your Trusted Partner in ", /* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Luxury Rentals"
								})]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-sm text-foreground/70 mb-3 leading-relaxed",
								children: [
									"Palm Beach Rental Pros is a boutique luxury rental consultancy specializing in the most sought-after residential communities across Palm Beach County. From waterfront estates in Boca Raton to premier high-rise living in West Palm Beach, ",
									AGENT_NAME,
									"connects discerning clients with exceptional properties."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-foreground/70 mb-4 leading-relaxed",
								children: "White-glove service includes personalized property tours, lease negotiation, and ongoing tenant advocacy."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3",
								children: [
									{
										icon: Shield,
										label: "Licensed & Insured"
									},
									{
										icon: Key,
										label: "Exclusive Access"
									},
									{
										icon: Clock,
										label: "24/7 Support"
									},
									{
										icon: MapPin,
										label: "Local Experts"
									}
								].map((item) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("div", {
										className: "h-7 w-7 rounded-md bg-gold/10 flex items-center justify-center flex-shrink-0",
										children: /* @__PURE__ */ jsx(item.icon, { className: "h-3.5 w-3.5 text-gold" })
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-medium text-foreground/80",
										children: item.label
									})]
								}, item.label))
							})
						] })
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "management",
				className: "py-8 sm:py-10 bg-navy-light/30",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-6",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold text-gold uppercase tracking-widest mb-2 block",
								children: "Full-Service Solutions"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display text-2xl sm:text-3xl font-bold text-foreground mb-2",
								children: ["Property ", /* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Management"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground max-w-xl mx-auto",
								children: "Comprehensive management services for property owners."
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-4",
						children: [
							{
								icon: Search,
								title: "Tenant Placement",
								desc: "Rigorous screening and vetting to secure qualified, long-term tenants."
							},
							{
								icon: Shield,
								title: "Asset Protection",
								desc: "Proactive maintenance and compliance to preserve property value."
							},
							{
								icon: DollarSign,
								title: "Revenue Optimization",
								desc: "Dynamic pricing and lease structuring to maximize rental income."
							}
						].map((service) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-lg border border-gold/15 bg-card p-5 transition-all duration-300 hover:border-gold/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/5",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "h-9 w-9 rounded-lg bg-gold/10 flex items-center justify-center mb-3",
									children: /* @__PURE__ */ jsx(service.icon, { className: "h-5 w-5 text-gold" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-base font-semibold text-foreground mb-1.5",
									children: service.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: service.desc
								})
							]
						}, service.title))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "py-8 sm:py-10 relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/5" }), /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3",
							children: [
								"Ready to Find Your ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "Perfect Home"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-sm text-muted-foreground max-w-xl mx-auto mb-6",
							children: [AGENT_NAME, " is standing by to help you discover the finest properties Palm Beach County has to offer."]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: `tel:${AGENT_PHONE_TEL}`,
								className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-2.5 text-sm font-bold text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25",
								children: [
									/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
									"Call ",
									AGENT_PHONE_DISPLAY
								]
							}), /* @__PURE__ */ jsxs("a", {
								href: "mailto:paul@palmbeachrentalpros.com",
								className: "inline-flex items-center gap-2 rounded-md border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10",
								children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), "Email Paul"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-gold/10 bg-navy-light/20 pt-10 pb-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-2 md:col-span-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2 mb-3",
									children: [/* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ jsxs("span", {
										className: "font-display text-base font-semibold text-foreground",
										children: [
											"Palm Beach ",
											/* @__PURE__ */ jsx("span", {
												className: "text-gold",
												children: "Rental"
											}),
											" Pros"
										]
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground leading-relaxed mb-3",
									children: "Palm Beach County's premier luxury rental specialists."
								})]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-xs font-semibold text-foreground uppercase tracking-wider mb-3",
								children: "Communities"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-1.5",
								children: communities.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: c.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-xs text-muted-foreground hover:text-gold transition-colors",
									children: c.name
								}) }, c.name))
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-xs font-semibold text-foreground uppercase tracking-wider mb-3",
								children: "Services"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-1.5",
								children: [
									"Luxury Rentals",
									"Property Management",
									"Tenant Placement",
									"Investment Consulting",
									"Market Analysis"
								].map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", {
									className: "text-xs text-muted-foreground",
									children: s
								}) }, s))
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-xs font-semibold text-foreground uppercase tracking-wider mb-3",
								children: "Contact"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-gold mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", {
											className: "text-xs text-muted-foreground",
											children: AGENT_NAME
										})]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-gold mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsx("a", {
											href: `tel:${AGENT_PHONE_TEL}`,
											className: "text-xs text-muted-foreground hover:text-gold transition-colors",
											children: AGENT_PHONE_DISPLAY
										})]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-gold mt-0.5 flex-shrink-0" }), /* @__PURE__ */ jsx("span", {
											className: "text-xs text-muted-foreground",
											children: "Palm Beach County, FL"
										})]
									})
								]
							})] })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "border-t border-gold/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-[10px] text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" Palm Beach Rental Pros. All rights reserved."
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[10px] text-muted-foreground",
							children: "Licensed Real Estate Professional in the State of Florida"
						})]
					})]
				})
			})
		] })
	});
}
//#endregion
export { Index as component };
