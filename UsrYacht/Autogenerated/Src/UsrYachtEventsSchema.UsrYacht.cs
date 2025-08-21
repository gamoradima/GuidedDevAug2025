namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8b619fa1-26f4-4151-91ee-1262bb3e5ae4");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c105b007-8b55-495f-9f42-6e9327c19060");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,143,211,48,16,189,71,226,63,140,114,74,164,202,130,43,133,149,104,85,208,74,43,64,219,20,105,133,56,184,206,52,53,242,71,100,59,93,10,234,127,103,108,119,75,211,46,130,57,197,51,111,222,204,123,25,195,53,250,158,11,132,6,157,227,222,110,2,155,91,179,145,221,224,120,144,214,20,191,10,160,24,188,52,29,44,247,62,160,158,158,101,206,187,180,182,230,111,53,135,108,97,130,12,18,253,127,64,216,98,135,38,28,145,95,83,118,159,82,119,146,22,48,232,170,165,216,162,230,31,105,123,120,11,229,202,187,7,46,182,161,172,191,165,150,126,88,43,41,64,40,238,61,164,202,51,28,240,26,102,220,227,51,149,196,145,117,159,177,217,29,45,43,91,132,157,149,45,124,50,75,190,35,9,149,93,127,71,17,192,163,105,209,77,32,211,205,112,67,122,18,233,59,215,121,192,250,196,246,135,55,198,154,54,96,39,174,39,18,172,167,35,84,38,133,125,84,66,122,171,252,174,51,124,12,109,81,72,205,21,244,78,138,232,77,234,97,31,48,52,251,30,219,185,85,131,54,95,184,26,240,205,17,121,83,69,251,62,71,120,121,49,86,110,160,202,60,55,240,234,101,140,122,84,31,75,137,129,236,214,207,185,17,168,176,165,225,193,13,56,45,174,80,62,184,248,243,233,242,60,239,176,65,221,43,30,226,178,6,31,225,206,10,174,228,79,190,86,184,76,184,42,75,88,121,116,116,153,134,204,166,179,100,247,232,237,224,4,97,172,35,146,201,139,171,41,49,78,151,145,15,170,156,64,121,197,239,89,242,227,214,55,214,206,100,151,95,101,205,26,123,156,95,255,83,2,173,158,19,236,189,117,154,135,234,66,26,141,37,255,128,12,132,197,234,254,210,230,24,97,235,236,99,210,191,248,33,176,143,18,159,72,46,208,135,98,252,117,40,14,197,111,47,157,230,90,198,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("1aaf2008-bdb2-46e2-f975-e5a1782590bb"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("c105b007-8b55-495f-9f42-6e9327c19060"),
				CreatedInSchemaUId = new Guid("8b619fa1-26f4-4151-91ee-1262bb3e5ae4"),
				ModifiedInSchemaUId = new Guid("8b619fa1-26f4-4151-91ee-1262bb3e5ae4")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8b619fa1-26f4-4151-91ee-1262bb3e5ae4"));
		}

		#endregion

	}

	#endregion

}

