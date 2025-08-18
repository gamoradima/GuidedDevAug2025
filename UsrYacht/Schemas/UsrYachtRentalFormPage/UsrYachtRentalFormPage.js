define("UsrYachtRentalFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_qb94m01",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrRentalStartDate_odcpu8o",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrRentalStartDate_odcpu8o"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_6kywx79",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrRentalEndDate_3e7mn9w",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrRentalEndDate_3e7mn9w"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_hc5ztq3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrCustomer_bdcqc7l",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrCustomer_bdcqc7l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_uv0knrq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_uv0knrq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hc5ztq3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_1bnwq3v",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrManager_s1tko9u",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrManager_s1tko9u",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_silztpb",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_silztpb_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1bnwq3v",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_wezac11",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrYachtRentalDS_UsrComment_ozwl82w",
					"labelPosition": "above",
					"control": "$UsrYachtRentalDS_UsrComment_ozwl82w"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrYachtRentalDS_UsrRentalStartDate_odcpu8o": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrRentalStartDate"
						}
					},
					"UsrYachtRentalDS_UsrRentalEndDate_3e7mn9w": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrRentalEndDate"
						}
					},
					"UsrYachtRentalDS_UsrCustomer_bdcqc7l": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrCustomer"
						}
					},
					"UsrYachtRentalDS_UsrManager_s1tko9u": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrManager"
						}
					},
					"UsrYachtRentalDS_UsrComment_ozwl82w": {
						"modelConfig": {
							"path": "UsrYachtRentalDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrYachtRentalDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrYachtRental",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrYachtRentalDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});