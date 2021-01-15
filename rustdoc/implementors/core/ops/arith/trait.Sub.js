(function() {var implementors = {};
implementors["chrono"] = [{"text":"impl Sub&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDate&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDateTime&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveTime&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Date&lt;Tz&gt;&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;DateTime&lt;Tz&gt;&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["git2"] = [{"text":"impl Sub&lt;Sort&gt; for Sort","synthetic":false,"types":[]},{"text":"impl Sub&lt;CredentialType&gt; for CredentialType","synthetic":false,"types":[]},{"text":"impl Sub&lt;IndexEntryFlag&gt; for IndexEntryFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;IndexEntryExtendedFlag&gt; for IndexEntryExtendedFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;IndexAddOption&gt; for IndexAddOption","synthetic":false,"types":[]},{"text":"impl Sub&lt;RepositoryOpenFlags&gt; for RepositoryOpenFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;RevparseMode&gt; for RevparseMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;MergeAnalysis&gt; for MergeAnalysis","synthetic":false,"types":[]},{"text":"impl Sub&lt;MergePreference&gt; for MergePreference","synthetic":false,"types":[]},{"text":"impl Sub&lt;Status&gt; for Status","synthetic":false,"types":[]},{"text":"impl Sub&lt;RepositoryInitMode&gt; for RepositoryInitMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;SubmoduleStatus&gt; for SubmoduleStatus","synthetic":false,"types":[]},{"text":"impl Sub&lt;PathspecFlags&gt; for PathspecFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;CheckoutNotificationType&gt; for CheckoutNotificationType","synthetic":false,"types":[]},{"text":"impl Sub&lt;DiffStatsFormat&gt; for DiffStatsFormat","synthetic":false,"types":[]},{"text":"impl Sub&lt;StashApplyFlags&gt; for StashApplyFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;StashFlags&gt; for StashFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;AttrCheckFlags&gt; for AttrCheckFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;DiffFlags&gt; for DiffFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;ReferenceFormat&gt; for ReferenceFormat","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T, S, '_, '_&gt; Sub&lt;&amp;'_ HashSet&lt;T, S&gt;&gt; for &amp;'_ HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S1, S2, '_, '_&gt; Sub&lt;&amp;'_ IndexSet&lt;T, S2&gt;&gt; for &amp;'_ IndexSet&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl Sub&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl Sub&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl Sub&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimeSpec&gt; for TimeSpec","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimeVal&gt; for TimeVal","synthetic":false,"types":[]},{"text":"impl Sub&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNum&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNum&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl Sub&lt;CMSOptions&gt; for CMSOptions","synthetic":false,"types":[]},{"text":"impl Sub&lt;OcspFlag&gt; for OcspFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;Pkcs7Flags&gt; for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslOptions&gt; for SslOptions","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslMode&gt; for SslMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslVerifyMode&gt; for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslSessionCacheMode&gt; for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;ExtensionContext&gt; for ExtensionContext","synthetic":false,"types":[]},{"text":"impl Sub&lt;ShutdownState&gt; for ShutdownState","synthetic":false,"types":[]},{"text":"impl Sub&lt;X509CheckFlags&gt; for X509CheckFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;X509VerifyFlags&gt; for X509VerifyFlags","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Sub&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Timespec","synthetic":false,"types":[]},{"text":"impl Sub&lt;Timespec&gt; for Timespec","synthetic":false,"types":[]},{"text":"impl Sub&lt;SteadyTime&gt; for SteadyTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for SteadyTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Tm","synthetic":false,"types":[]},{"text":"impl Sub&lt;Tm&gt; for Tm","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl Sub&lt;Z0&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;U&gt;&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;U&gt;&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;Z0&gt; for PInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;Z0&gt; for NInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Cmp&lt;Ur&gt; + PrivateIntegerAdd&lt;&lt;Ul as Cmp&lt;Ur&gt;&gt;::Output, Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: Cmp&lt;Ul&gt; + PrivateIntegerAdd&lt;&lt;Ur as Cmp&lt;Ul&gt;&gt;::Output, Ul&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;B0&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Sub&lt;B0&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Sub&lt;B1&gt; for UInt&lt;UInt&lt;U, B&gt;, B1&gt;","synthetic":false,"types":[]},{"text":"impl Sub&lt;B1&gt; for UInt&lt;UTerm, B1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Sub&lt;B1&gt; for UInt&lt;U, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Sub&lt;B1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sub1&lt;U&gt;: Unsigned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;UTerm&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Bl:&nbsp;Bit, Ur:&nbsp;Unsigned&gt; Sub&lt;Ur&gt; for UInt&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;UInt&lt;Ul, Bl&gt;: PrivateSub&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrivateSubOut&lt;UInt&lt;Ul, Bl&gt;, Ur&gt;: Trim,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;ATerm&gt; for ATerm","synthetic":false,"types":[]},{"text":"impl&lt;Vl, Al, Vr, Ar&gt; Sub&lt;TArr&lt;Vr, Ar&gt;&gt; for TArr&lt;Vl, Al&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vl: Sub&lt;Vr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Al: Sub&lt;Ar&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()